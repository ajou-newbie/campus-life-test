package com.newbie.ajou.domain.typecount.exception;

public class TypeCountNotFoundException extends RuntimeException {
	private static final String MESSAGE = "존재하지 않는 타입 개수 정보입니다. ";

	public TypeCountNotFoundException() {
		super(MESSAGE);
	}
}
