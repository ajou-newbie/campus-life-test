package com.newbie.ajou.util;

public class ResultAddressGetter {

	private ResultAddressGetter() {}

	public static String getResultInUrl(String result) {

		return "/result/" + result;
	}
}
