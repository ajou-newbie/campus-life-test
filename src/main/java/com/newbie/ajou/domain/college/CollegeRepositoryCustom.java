package com.newbie.ajou.domain.college;

import com.newbie.ajou.domain.college.exception.CollegeNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class CollegeRepositoryCustom {
	private final CollegeRepository collegeRepository;

	public List<College> findAll() {
		return collegeRepository.findAll();
	}

	public College findByName(String name) {
		return collegeRepository.findByName(name)
				.orElseThrow(CollegeNotFoundException::new);
	}

	public College save(College college) {
		return collegeRepository.save(college);
	}

	public void deleteAll() {
		collegeRepository.deleteAll();
	}

	@PostConstruct
	public void init() {
		collegeRepository.save(new College("선택안함"));
		collegeRepository.save(new College("인문계열"));
		collegeRepository.save(new College("공학계열"));
		collegeRepository.save(new College("교육계열"));
		collegeRepository.save(new College("사회계열"));
		collegeRepository.save(new College("자연계열"));
		collegeRepository.save(new College("의약계열"));
		collegeRepository.save(new College("예체능계열"));
	}
}
