package com.newbie.ajou.domain.question;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
	@EntityGraph(attributePaths = {"choices"})
	@Override
	List<Question> findAll();
}
