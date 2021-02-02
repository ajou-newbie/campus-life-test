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
}
