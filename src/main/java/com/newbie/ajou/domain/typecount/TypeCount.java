package com.newbie.ajou.domain.typecount;

import com.newbie.ajou.domain.college.College;
import com.newbie.ajou.domain.type.Type;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class TypeCount {
	@Column(name = "type_count_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "type_id")
	private Type type;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "college_id")
	private College college;

	@Column
	private int count;

	public int increase() {
		return count++;
	}

	public TypeCount(Type type, College college) {
		this.type = type;
		this.college = college;
	}
}
