package com.newbie.ajou.util;

public class UrlToTypeConverter {
	private UrlToTypeConverter() {
	}

	public static String getType(String url) {
		StringBuilder result = new StringBuilder();
		result.append(url.charAt(0) == '1' ? 'E' : 'I');
		result.append(url.charAt(1) == '1' ? 'S' : 'N');
		result.append(url.charAt(2) == '1' ? 'T' : 'F');
		result.append(url.charAt(3) == '1' ? 'J' : 'P');
		return result.toString();
	}
}
