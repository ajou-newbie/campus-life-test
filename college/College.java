package com.newbie.ajou.domain.college;

import com.newbie.ajou.domain.JpaEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class College extends JpaEntity {
	@Column(name = "college_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;

	@Column
	private String name;

	@Column
	private Long istj;

	@Column
	private Long isfj;

	@Column
	private Long infj;

	@Column
	private Long intj;

	@Column
	private Long istp;

	@Column
	private Long isfp;

	@Column
	private Long infp;

	@Column
	private Long intp;

	@Column
	private Long estp;

	@Column
	private Long esfp;

	@Column
	private Long enfp;

	@Column
	private Long entp;

	@Column
	private Long estj;

	@Column
	private Long esfj;

	@Column
	private Long enfj;

	@Column
	private Long entj;

	public College(String name) {
		this.name = name;
	}

	public void increase(String resultUrl) {
		if (resultUrl.equals("0000")) {
			infp++;
		} else if (resultUrl.equals("0001")) {
			infj++;
		} else if (resultUrl.equals("0010")) {
			intp++;
		} else if (resultUrl.equals("0011")) {
			intj++;
		} else if (resultUrl.equals("0100")) {
			isfp++;
		} else if (resultUrl.equals("0101")) {
			isfj++;
		} else if (resultUrl.equals("0110")) {
			istp++;
		} else if (resultUrl.equals("0111")) {
			istj++;
		} else if (resultUrl.equals("1000")) {
			enfp++;
		} else if (resultUrl.equals("1001")) {
			enfj++;
		} else if (resultUrl.equals("1010")) {
			entp++;
		} else if (resultUrl.equals("1011")) {
			entj++;
		} else if (resultUrl.equals("1100")) {
			esfp++;
		} else if (resultUrl.equals("1101")) {
			esfj++;
		} else if (resultUrl.equals("1110")) {
			estp++;
		} else if (resultUrl.equals("1111")) {
			estj++;
		}
	}
}
