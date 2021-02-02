package com.newbie.ajou.domain.user;

import com.newbie.ajou.domain.JpaEntity;
import com.newbie.ajou.domain.type.Type;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
public class User extends JpaEntity {
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;

	@JoinColumn(name = "type_id")
	@ManyToOne
	private Type type;

	public void setType(Type type) {
		this.type = type;
	}
}
