package com.newbie.ajou.util;

public class QuestionTypeMapper {
	private final static String[] typeArr = new String[]
			{null, "EI", "SN", "TF", "JP", "EI", "SN", "TF", "JP", "EI", "SN", "TF", "JP"};

	public QuestionTypeMapper() {
	}

	public static String mapQuestionToType(int idx) {
		return typeArr[idx];
	}
}