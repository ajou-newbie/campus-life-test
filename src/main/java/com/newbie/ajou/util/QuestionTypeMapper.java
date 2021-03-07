package com.newbie.ajou.util;

public class QuestionTypeMapper {
	private final static String[] typeArr = new String[]
			{null, "EI", "JP", "EI", "JP", "SN", "EI", "JP", "SN", "TF", "TF", "SN", "TF"};

	public QuestionTypeMapper() {
	}

	public static String mapQuestionToType(int idx) {
		return typeArr[idx];
	}
}