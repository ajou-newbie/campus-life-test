package com.newbie.ajou.service;

import com.newbie.ajou.domain.college.College;
import com.newbie.ajou.domain.college.CollegeRepository;
import com.newbie.ajou.domain.user.User;
import com.newbie.ajou.domain.user.UserRepository;
import com.newbie.ajou.util.ResultAddressGetter;
import com.newbie.ajou.util.ResultTypeGetter;
import com.newbie.ajou.web.dto.ResultRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class ResultServiceImpl implements ResultService {
	private static final String RESULT_PREFIX = "/result/";

	private final CollegeRepository collegeRepository;
	private final UserRepository userRepository;

	@Transactional
	@Override
	public String getAddress(ResultRequestDto resultRequestDto) {
		String resultType = ResultTypeGetter.getResultType(resultRequestDto.getAnswers());
		String resultUrl = ResultAddressGetter.getResultUrl(resultType);
		saveResult(resultRequestDto.getCollege(), resultUrl);
		return RESULT_PREFIX + resultUrl;
	}

	@Transactional
	@Override
	public void saveResult(String collegeName, String resultUrl) {
		College college = collegeRepository.findByName(collegeName);
		college.increase(resultUrl);
		User user = new User();
		user.setCollege(college);
		userRepository.save(user);
	}
}
