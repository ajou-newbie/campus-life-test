package com.newbie.ajou.domain;

import com.newbie.ajou.util.TraitPointsGetter;
import lombok.Getter;

@Getter
public class Traits {
	private final double EI;
	private final double SN;
	private final double TF;
	private final double JP;

	public Traits(int[] choices) {
		TraitPointsGetter traitPointsGetter = new TraitPointsGetter(choices);
		double[] points = traitPointsGetter.getPoints();

		this.EI = points[0];
		this.SN = points[1];
		this.TF = points[2];
		this.JP = points[3];
	}
}
