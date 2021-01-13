package com.newbie.ajou.service;

import com.newbie.ajou.domain.Result;
import com.newbie.ajou.web.dto.AnswerDto;

public interface ResultService {

	String getType(AnswerDto answerDto);

	String getAddress(AnswerDto answerDto);

	Result getResult(AnswerDto answerDto);
}
