package com.newbie.ajou.web.controller;

import com.newbie.ajou.service.QuestionService;
import com.newbie.ajou.service.ResultService;
import com.newbie.ajou.web.dto.ResultRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class CampusLifeTestController {
	private final QuestionService questionService;
	private final ResultService resultService;

	@GetMapping("/questions")
	public Map<String,Object> getQuestionData() {
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("questions", questionService.findAll());
		return map;
	}

	@PostMapping("/result")
	public String openResult(@RequestBody @Valid ResultRequestDto resultRequestDto) {
		return resultService.getAddress(resultRequestDto);
	}
}
