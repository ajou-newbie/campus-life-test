package com.newbie.ajou.domain;

import lombok.Getter;

@Getter
public class Result {
	private final String resultType;
	private final String resultUrl;

	public Result(String type, String url) {
		this.resultType = type;
		this.resultUrl = url;
	}
}
