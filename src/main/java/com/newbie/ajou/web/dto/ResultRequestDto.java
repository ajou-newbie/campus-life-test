package com.newbie.ajou.web.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.Size;

@Getter
@Setter
public class ResultRequestDto {
	@Size(min = 13, max = 13)
	private final int[] answers;

	private final String college;

	public ResultRequestDto(@Valid int[] answers, String college) {
		this.answers = answers;
		this.college = college;
	}
}

