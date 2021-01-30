package com.newbie.ajou.web.dto;

import com.newbie.ajou.domain.question.Question;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class QuestionResponseDto {
	private final int questionId;
	private final String questionContent;
	private final List<ChoiceResponseDto> choices;

	public QuestionResponseDto(Question entity) {
		this.questionId = entity.getId();
		this.questionContent = entity.getContent();
		this.choices = entity.getChoices().stream()
				.map(ChoiceResponseDto::new)
				.collect(Collectors.toList());
	}
}
