package com.newbie.ajou.domain.question;

import com.newbie.ajou.domain.JpaEntity;
import com.newbie.ajou.domain.choice.Choice;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
public class Question extends JpaEntity {
	@Column(name = "question_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;

	@Column
	private String content;

	@OneToMany(mappedBy = "question",fetch = FetchType.EAGER)
	private List<Choice> choices = new ArrayList<>();
}
