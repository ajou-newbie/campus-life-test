package com.newbie.ajou.service;

import com.newbie.ajou.domain.college.College;
import com.newbie.ajou.domain.college.CollegeRepositoryCustom;
import com.newbie.ajou.domain.type.Type;
import com.newbie.ajou.domain.type.TypeRepositoryCustom;
import com.newbie.ajou.domain.typecount.TypeCountRepositoryCustom;
import com.newbie.ajou.domain.user.UserRepositoryCustom;
import com.newbie.ajou.web.dto.ResultRequestDto;
import com.newbie.ajou.web.dto.ResultResponseDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;

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

	@BeforeEach
	void init() {
		userRepositoryCustom.deleteAll();
	}


	@Test
	public void 결과_url_매핑_동작_확인() {
		//given
		int[] answers = new int[]{0, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2};
		String college = TEST_COLLEGE_NAME;
		ResultRequestDto resultRequestDto = new ResultRequestDto(answers, college);

		//when
		ResultResponseDto result = resultService.getResult(resultRequestDto);

		//then
		assertThat(result.getUrl()).isEqualTo("/result/0101");
	}

	@Test
	void 설문_결과_저장_기능_동작_확인() {
		//given
		int[] answers = new int[]{0, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2};
		ResultRequestDto resultRequestDto = new ResultRequestDto(answers, TEST_COLLEGE_NAME);
		College college = collegeRepositoryCustom.findByName(TEST_COLLEGE_NAME);
		Type type = typeRepositoryCustom.findByName("isfj");

		//when
		int beforeRequest = typeCountRepositoryCustom.findByTypeAndCollege(type, college).getCount();
		resultService.getResult(resultRequestDto);
		int afterRequest = typeCountRepositoryCustom.findByTypeAndCollege(type, college).getCount();

		//then
		assertThat(afterRequest).isEqualTo(beforeRequest + 1);
		assertThat(userRepositoryCustom.findAll().size()).isEqualTo(1);
	}

	@Test
	void 나와_같은_유형이_가장_많은_단과대_추출() {
		//given
		int[] answers = new int[]{0, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2};

		ResultRequestDto dto1 = new ResultRequestDto(answers, "의학");
		ResultRequestDto dto2 = new ResultRequestDto(answers, "의학");
		ResultRequestDto dto3 = new ResultRequestDto(answers, "의학");
		ResultRequestDto dto4 = new ResultRequestDto(answers, "공학");
		ResultRequestDto dto5 = new ResultRequestDto(answers, "공학");
		ResultRequestDto dto6 = new ResultRequestDto(answers, "예체능");

		//when 0101, 1101, 0000
		resultService.getResult(dto1);
		resultService.getResult(dto2);
		resultService.getResult(dto3);
		resultService.getResult(dto4);
		resultService.getResult(dto5);
		ResultResponseDto result = resultService.getResult(dto6);

		//then
		assertThat(result.getTop2Colleges()).containsAll(Arrays.asList("의학", "공학"));
	}
}
