package com.newbie.ajou.web.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class ResultResponseDto {
	private static final String RESULT_PREFIX = "/result/";

	private final String url;
	//private final List<String> top2Colleges;

	public ResultResponseDto(String url) {
		this.url = RESULT_PREFIX + url;
	}

	/*
	public ResultResponseDto(String url, List<String> top2Colleges) {
		this.url = RESULT_PREFIX + url;
		this.top2Colleges = top2Colleges;
	}
	*/
}
