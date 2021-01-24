package com.newbie.ajou.web.controller;

import com.newbie.ajou.service.ResultService;
import com.newbie.ajou.web.dto.AnswerDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class CampusLifeTestController {

	private final ResultService resultService;

	@RequestMapping("/result")
	public String openResult(@RequestBody @Valid AnswerDto answerDto) {
		return resultService.getAddress(answerDto);
	}
}
