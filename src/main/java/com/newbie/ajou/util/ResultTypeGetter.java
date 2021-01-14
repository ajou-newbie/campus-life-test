package com.newbie.ajou.util;

import com.newbie.ajou.domain.Traits;
public class ResultTypeGetter {

	private ResultTypeGetter() {}

	public static String extractTraitsData(int[] choices) {
		Traits traits = new Traits(choices);
		StringBuilder sb = new StringBuilder();

		sb.append(traits.getEI()>0 ? "E" : "I");
		sb.append(traits.getSN()>0 ? "S" : "N");
		sb.append(traits.getTF()>0 ? "T" : "F");
		sb.append(traits.getJP()>0 ? "J" : "P");

		return sb.toString();
	}

}
