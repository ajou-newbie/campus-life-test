package com.newbie.ajou.domain.user;

import com.newbie.ajou.domain.college.College;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
public class User {
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;

	@JoinColumn(name = "college_id")
	@ManyToOne
	private College college;

	public void setCollege(College college) {
		this.college = college;
	}
}
