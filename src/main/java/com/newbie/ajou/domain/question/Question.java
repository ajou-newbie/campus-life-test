package com.newbie.ajou.domain.question;

import com.newbie.ajou.domain.choice.Choice;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Entity
public class Question {
	@Column(name = "question_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;

	@Column
	private String content;

	@OneToMany(mappedBy = "question")
	private List<Choice> choices = new ArrayList<>();
}
