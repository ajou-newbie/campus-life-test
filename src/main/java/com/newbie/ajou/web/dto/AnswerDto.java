package com.newbie.ajou.web.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Getter
@Setter
public class AnswerDto {
	@Size(min=13, max=13)
	private final int[] answers;

	public AnswerDto(@JsonProperty("answers") int answers[]) {
		this.answers = answers;
	}
}

