package com.newbie.ajou.service;

import com.newbie.ajou.domain.Result;
import com.newbie.ajou.web.dto.AnswerDto;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class ServiceTest {

	private ResultService resultService = new ResultServiceImpl();

	@Test
	public void ResultServiceTest() {

		//given
		AnswerDto answerDto = new AnswerDto(new int[]{0, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2});

		//when
		String type = resultService.getType(answerDto);
		String address = resultService.getAddress(answerDto);
		Result result = resultService.getResult(answerDto);

		//then
		assertThat(type).isEqualTo("ISFJ");
		assertThat(address).isEqualTo("/result.ISFJ");
		assertThat(result.getResultType()).isEqualTo("ISFJ");
		assertThat(result.getResultUrl()).isEqualTo("/result.ISFJ");
	}
}
