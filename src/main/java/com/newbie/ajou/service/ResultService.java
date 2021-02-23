package com.newbie.ajou.service;

import com.newbie.ajou.domain.college.College;
import com.newbie.ajou.domain.type.Type;
import com.newbie.ajou.web.dto.ResultRequestDto;
import com.newbie.ajou.web.dto.ResultResponseDto;

public interface ResultService {
	ResultResponseDto getResult(ResultRequestDto resultRequestDto);

	void saveResult(Type type, College college);
}
