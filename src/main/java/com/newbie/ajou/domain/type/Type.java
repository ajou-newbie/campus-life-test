package com.newbie.ajou.domain.type;

import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
public class Type {
	@Column(name = "type_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;

	@Column
	private String name;

	public Type(String name) {
		this.name = name;
	}
}
