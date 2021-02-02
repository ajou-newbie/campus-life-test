package com.newbie.ajou.domain.choice;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;

@RequiredArgsConstructor
@Repository
public class ChoiceRepositoryCustom {
	private final ChoiceRepository choiceRepository;

	@PostConstruct
	public void init() {
	}
}
