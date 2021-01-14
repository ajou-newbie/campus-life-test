package com.newbie.ajou.domain;

import lombok.Getter;

@Getter
public class Result {
	private final String type;
	private final String url;

	public Result(String type, String url) {
		this.type = type;
		this.url = url;
	}
}
