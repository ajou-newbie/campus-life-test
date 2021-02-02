package com.newbie.ajou.service;

import com.newbie.ajou.domain.college.College;
import com.newbie.ajou.domain.college.CollegeRepositoryCustom;
import com.newbie.ajou.domain.type.Type;
import com.newbie.ajou.domain.type.TypeRepositoryCustom;
import com.newbie.ajou.domain.typecount.TypeCount;
import com.newbie.ajou.domain.typecount.TypeCountRepositoryCustom;
import com.newbie.ajou.domain.user.User;
import com.newbie.ajou.domain.user.UserRepositoryCustom;
import com.newbie.ajou.util.ResultAddressGetter;
import com.newbie.ajou.util.ResultTypeGetter;
import com.newbie.ajou.util.UrlToTypeConverter;
import com.newbie.ajou.web.dto.ResultRequestDto;
import com.newbie.ajou.web.dto.ResultResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ResultServiceImpl implements ResultService {

	private final CollegeRepositoryCustom collegeRepositoryCustom;
	private final TypeRepositoryCustom typeRepositoryCustom;
	private final UserRepositoryCustom userRepositoryCustom;
	private final TypeCountRepositoryCustom typeCountRepositoryCustom;

	@Transactional
	@Override
	public ResultResponseDto getResult(ResultRequestDto resultRequestDto) {
		String resultType = ResultTypeGetter.getResultType(resultRequestDto.getAnswers());
		String resultUrl = ResultAddressGetter.getResultUrl(resultType);
		String typeName = UrlToTypeConverter.getType(resultUrl);

		College college = collegeRepositoryCustom.findByName(resultRequestDto.getCollege());
		Type type = typeRepositoryCustom.findByName(typeName);
		saveResult(type, college);

		List<String> colleges = typeCountRepositoryCustom.findTop2CollegeByType(type);
		return new ResultResponseDto(resultUrl, colleges);
	}


	@Transactional
	@Override
	public void saveResult(Type type, College college) {
		TypeCount typeCount = typeCountRepositoryCustom.findByTypeAndCollege(type, college);
		typeCount.increase();

		User user = new User();
		user.setType(type);
		userRepositoryCustom.save(user);
	}
}
