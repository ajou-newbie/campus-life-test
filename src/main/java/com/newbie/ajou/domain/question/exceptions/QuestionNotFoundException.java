package com.newbie.ajou.domain.question.exceptions;

public class QuestionNotFoundException extends RuntimeException {
	private static final String MESSAGE = "질문을 찾을 수 없습니다. ";

	public QuestionNotFoundException() {
		super(MESSAGE);
	}
}
