package com.newbie.ajou.web.controller;

import com.newbie.ajou.service.ResultService;
import com.newbie.ajou.service.ResultServiceImpl;
import com.newbie.ajou.web.dto.AnswerDto;
import org.springframework.web.bind.annotation.RequestMapping;

public class CampusLifeTestController {

	@RequestMapping("/result")
	public String openResult(AnswerDto answerDto) {
		ResultService resultService = new ResultServiceImpl();
		return resultService.getAddress(answerDto);
	}
}
