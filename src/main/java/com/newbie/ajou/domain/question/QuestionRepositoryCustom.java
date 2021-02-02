package com.newbie.ajou.domain.question;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class QuestionRepositoryCustom {
	private final QuestionRepository questionRepository;

	public List<Question> findAll() {
		return questionRepository.findAll();
	}

	@PostConstruct
	public void init() {
	}
}
