package com.newbie.ajou.domain.type.exception;

public class TypeNotFoundException extends RuntimeException {
	private static final String MESSAGE = "존재하지 않는 타입입니다. ";

	public TypeNotFoundException() {
		super(MESSAGE);
	}
}
