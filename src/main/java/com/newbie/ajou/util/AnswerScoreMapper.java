package com.newbie.ajou.util;

public class AnswerScoreMapper {
	private final static double[] score = new double[]{0, 2.5, 1.5, -1.5, -2.5};

	private AnswerScoreMapper() {
	}

	public static double mapAnswerToScore(int idx) {
		return score[idx];
	}
}