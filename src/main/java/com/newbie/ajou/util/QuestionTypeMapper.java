package com.newbie.ajou.util;

import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

@Getter
public class QuestionTypeMapper {
	private final Map<Integer, String> questionType;

	public QuestionTypeMapper() {
		String[] typeArr = new String[]
				{null, "EI", "SN", "TF", "JP", "EI", "SN", "TF", "JP", "EI", "SN", "TF", "JP"};

		this.questionType = mapQuestionToType(typeArr);
	}

	/**
	 * mapQuestionToType()
	 * - Parameter: String[] (length==13)
	 * - Map<Integer, String> type: Question index(Key), Question type(Value)
	 */
	private Map<Integer, String> mapQuestionToType(String[] typeArr) {
		Map<Integer, String> mapper = new HashMap<>();

		for(int i=1; i<typeArr.length; i++) {
			mapper.put(i, typeArr[i]);
		}

		return mapper;
	}
}