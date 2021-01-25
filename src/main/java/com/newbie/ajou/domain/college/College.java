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
	private Long id;

	@Column
	private String name;

	@Column
	private int istj;

	@Column
	private int isfj;

	@Column
	private int infj;

	@Column
	private int intj;

	@Column
	private int istp;

	@Column
	private int isfp;

	@Column
	private int infp;

	@Column
	private int intp;

	@Column
	private int estp;

	@Column
	private int esfp;

	@Column
	private int enfp;

	@Column
	private int entp;

	@Column
	private int estj;

	@Column
	private int esfj;

	@Column
	private int enfj;

	@Column
	private int entj;

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
