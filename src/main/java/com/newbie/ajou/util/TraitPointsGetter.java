package com.newbie.ajou.util;

import com.newbie.ajou.domain.Traits;
import lombok.Getter;

import java.util.Map;

@Getter
public class TraitPointsGetter {
	private final double[] points;

	public TraitPointsGetter(int[] choices) {
		this.points = calculatePoints(choices);
	}

	private double[] calculatePoints(int[] choices) {
		double[] points = new double[4];

		for(int i=1; i<13; i++) {
			String type = getQuestionType(i);
			double score = getAnswerScore(choices[i]);
			switch (type) {
				case "EI":
					points[0] += score;
					break;
				case "SN":
					points[1] += score;
					break;
				case "TF":
					points[2] += score;
					break;
				case "JP":
					points[3] += score;
					break;
			}
		}
		return points;
	}

	private String getQuestionType(int idx) {
		QuestionTypeMapper questionMapper = new QuestionTypeMapper();
		Map<Integer, String> questionType = questionMapper.getQuestionType();

		return questionType.get(idx);
	}

	private Double getAnswerScore(int idx) {
		AnswerScoreMapper answerMapper = new AnswerScoreMapper();
		Map<Integer, Double> answerScore = answerMapper.getAnswerScore();

		return answerScore.get(idx);
	}
}
