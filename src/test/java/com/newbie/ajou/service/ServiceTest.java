package com.newbie.ajou.service;

import com.newbie.ajou.domain.college.College;
import com.newbie.ajou.domain.college.CollegeRepository;
import com.newbie.ajou.domain.user.UserRepository;
import com.newbie.ajou.web.dto.ResultRequestDto;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest
public class ServiceTest {
	private static final String TEST_COLLEGE_NAME = "의학";

	@Autowired
	private ResultService resultService;

	@Autowired
	private CollegeRepository collegeRepository;

	@Autowired
	private UserRepository userRepository;

	@BeforeEach
	void setUp() {
		College college = new College(TEST_COLLEGE_NAME);
		collegeRepository.save(college);
	}

	@AfterEach
	void init() {
		userRepository.deleteAll();
		collegeRepository.deleteAll();
	}

	@Test
	public void 결과_url_매핑_동작_확인() {
		//given
		int[] answers = new int[]{0, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2};
		String college = "의학";
		ResultRequestDto resultRequestDto = new ResultRequestDto(answers, college);

		//when
		String address = resultService.getAddress(resultRequestDto);

		//then
		assertThat(address).isEqualTo("/result/0101");
	}

	@Test
	void 설문_결과_저장_기능_동작_확인() {
		//given
		int[] answers = new int[]{0, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2};
		ResultRequestDto resultRequestDto = new ResultRequestDto(answers, TEST_COLLEGE_NAME);

		//when
		resultService.saveResult(resultRequestDto.getCollege(), "0101");
		College collage = collegeRepository.findByName(TEST_COLLEGE_NAME);

		//then
		assertThat(collage.getIsfj()).isEqualTo(1);
		assertThat(userRepository.findAll().size()).isEqualTo(1);
	}
}
