package com.newbie.ajou.web.controller;

import com.newbie.ajou.service.QuestionService;
import com.newbie.ajou.service.ResultService;
import com.newbie.ajou.service.UserCountService;
import com.newbie.ajou.web.dto.QuestionResponseDto;
import com.newbie.ajou.web.dto.ResultRequestDto;
import com.newbie.ajou.web.dto.ResultResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class CampusLifeTestController {
	private final UserCountService userCountService;
	private final QuestionService questionService;
	private final ResultService resultService;

	@CrossOrigin(origins = "http://localhost:80")
	@GetMapping("/index")
	public Long getUserCount() {
		return userCountService.count();
	}

	@CrossOrigin(origins = "http://localhost:80")
	@GetMapping("/questions")
	public List<QuestionResponseDto> getQuestionData() {
		return questionService.findAll();
	}

	@CrossOrigin(origins = "http://localhost:80")
	@PostMapping("/result")
	public ResultResponseDto openResult(@RequestBody @Valid ResultRequestDto resultRequestDto) {
		return resultService.getResult(resultRequestDto);
	}
}
