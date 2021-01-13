package com.newbie.ajou.util;

import com.newbie.ajou.domain.Traits;
import lombok.Getter;

@Getter
public class ResultTypeGetter {
	private final String resultType;

	public ResultTypeGetter(int[] choices) {

		this.resultType = extractTraitsData(choices);
	}

	private String extractTraitsData(int[] choices) {
		Traits traits = new Traits(choices);
		StringBuilder sb = new StringBuilder();

		if(traits.getEI() > 0)
			sb.append("E");
		else sb.append("I");

		if(traits.getSN() > 0)
			sb.append("S");
		else sb.append("N");

		if(traits.getTF() > 0)
			sb.append("T");
		else sb.append("F");

		if(traits.getJP() > 0)
			sb.append("J");
		else sb.append("P");

		return sb.toString();
	}

}
