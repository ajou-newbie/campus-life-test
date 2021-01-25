package com.newbie.ajou.service;

import com.newbie.ajou.web.dto.ResultRequestDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class ServiceTest {

	@Autowired
	private ResultService resultService;

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
}
