package com.newbie.ajou.web.controller;

import com.newbie.ajou.service.QuestionService;
import com.newbie.ajou.service.ResultService;
import com.newbie.ajou.web.dto.ResultRequestDto;
import com.newbie.ajou.web.dto.ResultResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class CampusLifeTestController {
	private final QuestionService questionService;
	private final ResultService resultService;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/questions")
	public List<QuestionResponseDto> getQuestionData() {
		return questionService.findAll();
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/result")
	public ResultResponseDto openResult(@RequestBody @Valid ResultRequestDto resultRequestDto) {
		return resultService.getResult(resultRequestDto);
	}
}
