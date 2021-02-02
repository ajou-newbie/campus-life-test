package com.newbie.ajou.service;

import com.newbie.ajou.domain.question.QuestionRepositoryCustom;
import com.newbie.ajou.web.dto.QuestionResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class QuestionServiceImpl implements QuestionService {
	private final QuestionRepositoryCustom questionRepositoryCustom;

	@Transactional(readOnly = true)
	public List<QuestionResponseDto> findAll() {
		return questionRepositoryCustom.findAll().stream()
				.map(QuestionResponseDto::new)
				.collect(Collectors.toList());
	}
}
