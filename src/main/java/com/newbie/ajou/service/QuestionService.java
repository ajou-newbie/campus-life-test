package com.newbie.ajou.service;

import com.newbie.ajou.web.dto.QuestionResponseDto;

import java.util.List;

public interface QuestionService {
	List<QuestionResponseDto> findAll();
}