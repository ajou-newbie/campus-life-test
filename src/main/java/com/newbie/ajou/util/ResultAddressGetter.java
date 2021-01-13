package com.newbie.ajou.util;

import lombok.Getter;

@Getter
public class ResultAddressGetter {
	private final String resultUrl;

	public ResultAddressGetter(String result) {

		this.resultUrl = getResultInUrl(result);
	}

	private String getResultInUrl(String result) {

		String url = "/result." + result; //url 매핑방식 수정필요

		return url;
	}
}
