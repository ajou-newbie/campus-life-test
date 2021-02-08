package com.newbie.ajou.domain.choice;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.newbie.ajou.domain.JpaEntity;
import com.newbie.ajou.domain.question.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Choice extends JpaEntity {
	@Column(name = "choice_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;

	@Column
	private String content;

	@ManyToOne
	@JoinColumn(name = "question_id")
	@JsonIgnore
	private Question question;

	public Choice(String content) {
		this.content = content;
	}

	public void setQuestions(Question question) {
		this.question = question;
	}
}
