package com.newbie.ajou.domain.college.exception;

public class CollegeNotFoundException extends RuntimeException {
	private static final String MESSAGE = "존재하지 않는 단과대입니다. ";

	public CollegeNotFoundException() {
		super(MESSAGE);
	}
}
