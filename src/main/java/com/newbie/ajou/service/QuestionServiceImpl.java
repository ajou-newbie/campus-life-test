package com.newbie.ajou.service;

import com.newbie.ajou.domain.question.QuestionRepository;
import com.newbie.ajou.web.dto.QuestionResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class QuestionServiceImpl implements QuestionService {
	private final QuestionRepository questionRepository;

	@Transactional(readOnly = true)
	public List<QuestionResponseDto> findAll() {
		return questionRepository.findAll().stream()
				.map(QuestionResponseDto::new)
				.collect(Collectors.toList());
	}
}
