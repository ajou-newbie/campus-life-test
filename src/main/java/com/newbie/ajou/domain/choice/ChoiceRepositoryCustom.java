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

	public void saveAll(List<Choice> choices, Question question) {
		choices.forEach(choice -> choice.setQuestions(question));
		choiceRepository.saveAll(choices);
	}

	@PostConstruct
	public void init() {
		Question question1 = questionRepository.findById(1);
		List<Choice> choices1 = new ArrayList<>();
		choices1.add(new Choice("단톡방의 지배자는 나! 대화의 흐름이 나를 중심으로 흘러가도록 쉴틈없는 채팅을 선보인다."));
		choices1.add(new Choice("처음이니깐 너무 나서진 말아야지. 다양한 리액션을 통해 나의 존재감을 조금씩 어필한다."));
		choices1.add(new Choice("필요할 때만 말한다."));
		choices1.add(new Choice("아무도 말걸지마라.. 대화에 참여하지 않고 그저 지켜보기만한다."));
		this.saveAll(choices1, question1);

		Question question2 = questionRepository.findById(2);
		List<Choice> choices2 = new ArrayList<>();
		choices2.add(new Choice("졸업까지의 수강 계획 다들 있지 않나?"));
		choices2.add(new Choice("혹시 몰라 시간표 플랜B까지 준비했다."));
		choices2.add(new Choice("급하게 계획한 시간표로 올클을 노려본다."));
		choices2.add(new Choice("난 이미 글렀다. 빌넣을 노려보자."));
		this.saveAll(choices2, question2);

		Question question3 = questionRepository.findById(3);
		List<Choice> choices3 = new ArrayList<>();
		choices3.add(new Choice("나를 다 표현하기에 자기소개 시간은 너무 짧아! TMI를 남발한다."));
		choices3.add(new Choice("힘을 숨긴 인싸. 굉장한 외향인이지만 첫 만남부터 나대면 좀 그렇겠지? 점잖은 척 한다."));
		choices3.add(new Choice("최대한 짧게 소개하고 자리에 앉는다."));
		choices3.add(new Choice("내 차례가 되기 전 화장실로 잠깐 도망갈까 고민한다."));
		this.saveAll(choices3, question3);

		Question question4 = questionRepository.findById(4);
		List<Choice> choices4 = new ArrayList<>();
		choices4.add(new Choice("모자와 마스크를 챙겨 빠르게 뛰쳐나간다."));
		choices4.add(new Choice("우선 친구에게 카톡을 보내고 천천히 수업에 갈 준비를 한다."));
		choices4.add(new Choice("일어나 갈지 말지 고민만 5분째..."));
		choices4.add(new Choice("다시 잔다."));
		this.saveAll(choices4, question4);

		Question question5 = questionRepository.findById(5);
		List<Choice> choices5 = new ArrayList<>();
		choices5.add(new Choice("자녀계획을 세워본다."));
		choices5.add(new Choice("종강하는 그 날 까지 이 수업 있는 날은 최대한 꾸미고 간다."));
		choices5.add(new Choice("누가 자리를 잘못 찾았나?"));
		choices5.add(new Choice("(이미 마셨음)"));
		this.saveAll(choices5, question5);

		Question question6 = questionRepository.findById(6);
		List<Choice> choices6 = new ArrayList<>();
		choices6.add(new Choice("안녕하세요? 이름이 뭐에요? 폭풍 친화력을 발휘한다."));
		choices6.add(new Choice("말 걸어주기를 기다리다 말을 걸어준 순간부터 입을 연다."));
		choices6.add(new Choice("상대방이 말을 걸지 않는 이상 먼저 입을 열지 않는다."));
		choices6.add(new Choice("짧게 인사를 하고 과방을 나와 다른 쉴 곳을 찾아 떠난다."));
		this.saveAll(choices6, question6);
	}
}
