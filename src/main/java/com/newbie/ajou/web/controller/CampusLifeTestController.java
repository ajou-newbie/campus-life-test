package com.newbie.ajou.web.controller;

import com.newbie.ajou.service.ResultService;
import com.newbie.ajou.web.dto.ResultRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
public class CampusLifeTestController {

	private final ResultService resultService;

	@PostMapping("/result")
	public String openResult(@RequestBody @Valid ResultRequestDto resultRequestDto) {
		System.out.println(resultService.getAddress(resultRequestDto));
		return resultService.getAddress(resultRequestDto);
	}
}
