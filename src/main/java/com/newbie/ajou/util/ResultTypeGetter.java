package com.newbie.ajou.util;

import com.newbie.ajou.domain.Traits;

public class ResultTypeGetter {

	private ResultTypeGetter() {
	}

	public static String getResultType(int[] choices) {
		Traits traits = new Traits(choices);
		StringBuilder sb = new StringBuilder();

		sb.append(traits.getEI() > 0 ? "1" : "0");
		sb.append(traits.getSN() > 0 ? "1" : "0");
		sb.append(traits.getTF() > 0 ? "1" : "0");
		sb.append(traits.getJP() > 0 ? "1" : "0");
		return sb.toString();
	}
}
