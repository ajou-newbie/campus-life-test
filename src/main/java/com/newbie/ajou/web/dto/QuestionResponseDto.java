package com.newbie.ajou.web.dto;

import com.newbie.ajou.domain.choice.Choice;
import com.newbie.ajou.domain.question.Question;
import lombok.Getter;

import java.util.List;

@Getter
public class QuestionResponseDto {
	private final Long question_id;
	private final String question_content;
	private final List<Choice> Choice;

	public QuestionResponseDto(Question entity) {
		this.question_id = entity.getId();
		this.question_content = entity.getContent();
		this.Choice = entity.getChoices();
	}
}
