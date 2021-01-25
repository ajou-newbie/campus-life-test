package com.newbie.ajou.service;

import com.newbie.ajou.util.ResultAddressGetter;
import com.newbie.ajou.util.ResultTypeGetter;
import com.newbie.ajou.web.dto.ResultRequestDto;
import org.springframework.stereotype.Service;

@Service
public class ResultServiceImpl implements ResultService {

	@Override
	public String getAddress(ResultRequestDto resultRequestDto) {
		String resultType = ResultTypeGetter.getResultType(resultRequestDto.getAnswers());
		return ResultAddressGetter.getResultUrl(resultType);
	}
}
