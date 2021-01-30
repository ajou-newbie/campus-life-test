package com.newbie.ajou.service;

import com.newbie.ajou.web.dto.QuestionResponseDto;

import java.util.List;

public interface QuestionService {
	public List<QuestionResponseDto> findAll();
}