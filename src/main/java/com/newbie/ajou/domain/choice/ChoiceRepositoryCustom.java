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
		choices5.add(new Choice("(이미 마셨음)"));
		choices5.add(new Choice("누가 자리를 잘못 찾았나?"));
		choices5.add(new Choice("종강하는 그 날 까지 이 수업 있는 날은 최대한 꾸미고 간다."));
		choices5.add(new Choice("자녀계획을 세워본다."));
		this.saveAll(choices5, question5);

		Question question6 = questionRepository.findById(6);
		List<Choice> choices6 = new ArrayList<>();
		choices6.add(new Choice("안녕하세요? 이름이 뭐에요? 폭풍 친화력을 발휘한다."));
		choices6.add(new Choice("말 걸어주기를 기다리다 말을 걸어준 순간부터 입을 연다."));
		choices6.add(new Choice("상대방이 말을 걸지 않는 이상 먼저 입을 열지 않는다."));
		choices6.add(new Choice("짧게 인사를 하고 과방을 나와 다른 쉴 곳을 찾아 떠난다."));
		this.saveAll(choices6, question6);

		Question question7 = questionRepository.findById(7);
		List<Choice> choices7 = new ArrayList<>();
		choices7.add(new Choice("학생회관 3층 우측 복도 29번 사물함안에 있어."));
		choices7.add(new Choice("과방에 있어!"));
		choices7.add(new Choice("과방에,,있을걸,,?"));
		choices7.add(new Choice("너도 없어? 야 나두!"));
		this.saveAll(choices7, question7);

		Question question8 = questionRepository.findById(8);
		List<Choice> choices8 = new ArrayList<>();
		choices8.add(new Choice("읽씹인지도 몰랐다."));
		choices8.add(new Choice("많이 바쁜가보다 하고 그냥 넘어간다."));
		choices8.add(new Choice("쿨한척 하고 싶지만 계속 신경쓰여 답장을 기다린다."));
		choices8.add(new Choice("내가 잘못 한게 있나? 카톡을 모두 훑어 본다."));
		this.saveAll(choices8, question8);

		Question question9 = questionRepository.findById(9);
		List<Choice> choices9 = new ArrayList<>();
		choices9.add(new Choice("너를 영혼까지 털어버리겠어. 상대의 모든 논리적 허점을 반박한다."));
		choices9.add(new Choice("조금 강하게 주장하더라도 일단 이기고 나서 생각하자."));
		choices9.add(new Choice("상대의 기분을 최대한 존중하며 토론에 임한다."));
		choices9.add(new Choice("토론이 끝난 뒤 상대방이 느꼈을 혹시 모를 불쾌감에 대해 사과한다."));
		this.saveAll(choices9, question9);

		Question question10 = questionRepository.findById(10);
		List<Choice> choices10 = new ArrayList<>();
		choices10.add(new Choice("불만을 모두 표출하여 싹 재개발해버린다."));
		choices10.add(new Choice("상대의 반응을 살피며 개선점을 지적한다."));
		choices10.add(new Choice("그 자리에서는 지적하지 않고, 후에 직접 수정한다."));
		choices10.add(new Choice("퀄리티가 좋든 나쁘든, 일단은 고생했다고 칭찬해준다."));
		this.saveAll(choices10, question10);

		Question question11 = questionRepository.findById(11);
		List<Choice> choices11 = new ArrayList<>();
		choices11.add(new Choice("자금, 시간, 가능성 등 현실적인 부분을 중점으로 창업 아이디어를 서술한다."));
		choices11.add(new Choice("최근 트렌트를 반영한 창업 아이템을 바탕으로 아이디어를 서술한다."));
		choices11.add(new Choice("독창적인 아이디어를 바탕으로 내 생각을 서술한다."));
		choices11.add(new Choice("거의 아이디어 무한리필집. 상상 속에서만 존재했던 아이디어를 마구 서술한다."));
		this.saveAll(choices11, question11);

		Question question12 = questionRepository.findById(12);
		List<Choice> choices12 = new ArrayList<>();
		choices12.add(new Choice("평점 몇점인데?"));
		choices12.add(new Choice("다음에 더 열심히하면 되지 뭐~"));
		choices12.add(new Choice("헐 ㅠ ㅠ 교수님이 잘못하셨네 !"));
		choices12.add(new Choice("많이 속상했겠다...어떡해...(이미 우는 중)"));
		this.saveAll(choices12, question12);
	}
}
