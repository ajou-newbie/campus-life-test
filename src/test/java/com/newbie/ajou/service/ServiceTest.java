package com.newbie.ajou.service;

import com.newbie.ajou.domain.college.College;
import com.newbie.ajou.domain.college.CollegeRepositoryCustom;
import com.newbie.ajou.domain.type.Type;
import com.newbie.ajou.domain.type.TypeRepositoryCustom;
import com.newbie.ajou.domain.typecount.TypeCount;
import com.newbie.ajou.domain.typecount.TypeCountRepositoryCustom;
import com.newbie.ajou.domain.user.UserRepositoryCustom;
import com.newbie.ajou.web.dto.ResultRequestDto;
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
	private CollegeRepositoryCustom collegeRepositoryCustom;

	@Autowired
	private UserRepositoryCustom userRepositoryCustom;

	@Autowired
	private TypeCountRepositoryCustom typeCountRepositoryCustom;

	@Autowired
	private TypeRepositoryCustom typeRepositoryCustom;

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
		College college = collegeRepositoryCustom.findByName(TEST_COLLEGE_NAME);
		Type type = typeRepositoryCustom.findByName("isfj");

		//when
		resultService.saveResult(resultRequestDto.getCollege(), "0101");
		TypeCount typeCount = typeCountRepositoryCustom.findByTypeAndCollege(type, college);

		//then
		assertThat(typeCount.getCount()).isEqualTo(1);
		assertThat(userRepositoryCustom.findAll().size()).isEqualTo(1);
	}
}
