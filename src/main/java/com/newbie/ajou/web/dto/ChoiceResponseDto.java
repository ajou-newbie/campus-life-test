package com.newbie.ajou.web.dto;

import com.newbie.ajou.domain.choice.Choice;
import lombok.Getter;

@Getter
public class ChoiceResponseDto {
	private final int choiceId;
	private final String choiceContent;

	public ChoiceResponseDto(Choice entity) {
		this.choiceId = entity.getId();
		this.choiceContent = entity.getContent();
	}
}
