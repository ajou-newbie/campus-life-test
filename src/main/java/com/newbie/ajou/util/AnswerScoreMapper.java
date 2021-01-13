package com.newbie.ajou.util;

import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

@Getter
public class AnswerScoreMapper {
	private final Map<Integer, Double> answerScore;

	public AnswerScoreMapper() {
		this.answerScore = mapAnswerToScore();
	}

	/**
	 * mapAnswerToScore()
	 * - Map<Integer, Double> type: Answer index(Key), Answer score(Value)
	 * - answer 1 gets 2.5 points
	 * - answer 2 gets 1.5 points
	 * - answer 3 gets -1.5 points
	 * - answer 4 gets -2.5 points
	 */
	private Map<Integer, Double> mapAnswerToScore() {
		Map<Integer, Double> mapper = new HashMap<>();
		double[] score = new double[] {0, 2.5, 1.5, -1.5, -2.5};

		for(int i=1; i<=4; i++) {
			mapper.put(i, score[i]);
		}

		return mapper;
	}
}