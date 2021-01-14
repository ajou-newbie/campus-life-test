package com.newbie.ajou.web.dto;

import lombok.Getter;

@Getter
public class AnswerDto {
	private final int[] answers;

	public AnswerDto(int answers[]) {
		this.answers = answers;
	}
}
