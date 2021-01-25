package com.newbie.ajou.util;

public class TraitPointsCalculator {

	private TraitPointsCalculator() {
	}

	public static double[] calculatePoints(int[] choices) {
		double[] points = new double[4];

		for (int i = 1; i < 13; i++) {
			String type = QuestionTypeMapper.mapQuestionToType(i);
			double score = AnswerScoreMapper.mapAnswerToScore(choices[i]);
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
}
