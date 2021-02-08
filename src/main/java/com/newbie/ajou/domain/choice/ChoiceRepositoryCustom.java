package com.newbie.ajou.domain.choice;

import com.newbie.ajou.domain.question.Question;
import com.newbie.ajou.domain.question.QuestionRepositoryCustom;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class ChoiceRepositoryCustom {
	private final ChoiceRepository choiceRepository;
	private final QuestionRepositoryCustom questionRepository;

	@PostConstruct
	public void init() {
		Question question1 = questionRepository.findById(1);
		List<Choice> choices1 = new ArrayList<>();
		choices1.add(new Choice("1. 내 차례가 되기 전 화장실로 잠깐 도망갈까 고민한다."));
		choices1.add(new Choice("2. 최대한 짧게 소개하고 자리에 앉는다."));
		choices1.add(new Choice("3. 힘을 숨긴 인싸. 굉장한 외향인이지만 첫 만남부터 나대면 좀 그렇겠지? 점잖은 척 한다."));
		choices1.add(new Choice("4. 나를 다 표현하기에 자기소개 시간은 너무 짧아! TMI를 남발한다."));
		choiceRepository.saveAll(choices1);
	}
}
