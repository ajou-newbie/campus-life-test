package com.newbie.ajou.web.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.newbie.ajou.domain.college.College;
import com.newbie.ajou.domain.college.CollegeRepository;
import com.newbie.ajou.domain.user.UserRepository;
import com.newbie.ajou.web.dto.ResultRequestDto;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest
class CampusLifeTestControllerTest {
	private static final String TEST_COLLEGE_NAME = "의학";

	@Autowired
	WebApplicationContext context;

	@Autowired
	private CollegeRepository collegeRepository;

	@Autowired
	private UserRepository userRepository;

	private MockMvc mvc;

	@BeforeAll
	void init() {
		mvc = MockMvcBuilders
				.webAppContextSetup(context)
				.build();
		College college = new College(TEST_COLLEGE_NAME);
		collegeRepository.save(college);
	}

	@AfterAll
	void clearUp() {
		userRepository.deleteAll();
		collegeRepository.deleteAll();
	}

	@Test
	void ResultRequestDto_매핑_동작_확인() throws Exception {
		//given
		int[] answers = new int[]{0, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2};
		ResultRequestDto dto = new ResultRequestDto(answers, TEST_COLLEGE_NAME);

		//when
		MvcResult result = mvc.perform(post("/result")
				.characterEncoding("UTF-8")
				.contentType(MediaType.APPLICATION_JSON)
				.content(new ObjectMapper().writeValueAsString(dto)))
				.andDo(print())
				.andReturn();
		String resultUrl = result.getResponse().getContentAsString();

		//then
		assertThat(resultUrl).isEqualTo("/result/0101");
	}
}