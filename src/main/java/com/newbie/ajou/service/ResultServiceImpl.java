package com.newbie.ajou.service;

import com.newbie.ajou.domain.Result;
import com.newbie.ajou.util.ResultAddressGetter;
import com.newbie.ajou.util.ResultTypeGetter;
import com.newbie.ajou.web.dto.AnswerDto;
import org.springframework.stereotype.Service;

@Service
public class ResultServiceImpl implements ResultService {

	@Override
	public String getType(AnswerDto answerDto) {
		int[] answerArr = answerDto.getAnswers();
		ResultTypeGetter resultTypeGetter = new ResultTypeGetter(answerArr);

		return resultTypeGetter.getResultType();
	}

	@Override
	public String getAddress(AnswerDto answerDto) {
		String resultType = getType(answerDto);
		ResultAddressGetter resultAddressGetter = new ResultAddressGetter(resultType);

		return resultAddressGetter.getResultUrl();
	}

	@Override
	public Result getResult(AnswerDto answerDto) {
		String resultType = getType(answerDto);
		String resultUrl = getAddress(answerDto);

		return new Result(resultType, resultUrl);
	}

}
