package com.newbie.ajou.web.controller;

import com.newbie.ajou.service.ResultService;
import com.newbie.ajou.web.dto.AnswerDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
public class CampusLifeTestController {

	private final ResultService resultService;

	@RequestMapping("/result")
	public String openResult(AnswerDto answerDto) {
		return resultService.getAddress(answerDto);
	}
}
