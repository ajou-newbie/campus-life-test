package com.newbie.ajou.domain.choice;

import com.newbie.ajou.domain.question.Question;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
public class Choice {
	@Column(name = "choice_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;

	@ManyToOne
	@JoinColumn(name = "question_id")
	private Question question;
}
