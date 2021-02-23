package com.newbie.ajou.domain.question;

import com.newbie.ajou.domain.question.exceptions.QuestionNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class QuestionRepositoryCustom {
	private final QuestionRepository questionRepository;

	public List<Question> findAll() {
		return questionRepository.findAll();
	}

	public Question findById(int id) {
		return questionRepository.findById(id)
				.orElseThrow(QuestionNotFoundException::new);
	}

	@PostConstruct
	public void init() {
		questionRepository.save(new Question("대학 합격 발표 후 과 단톡방에 초대되었다. 단톡방 속 나의 행동은?"));
		questionRepository.save(new Question("새 학기가 시작되네요! 수강신청 시즌 나의 모습은?"));
		questionRepository.save(new Question("개강 후 첫 수업, 교수님께서 한명씩 일어나 자기소개를 해보자고 하신다. 이 때 나의 모습은?"));

		questionRepository.save(new Question("잠에서 깨어나보니 수업 시작 5분 전! 그리고 학교까지는 뛰어서 5분! 이 때 나의 행동은?"));
		questionRepository.save(new Question("수업 시작 전, 잠깐 화장실을 갔다온 사이 내 책상 위에 초코우유가 하나 놓여있다. 이건..뭘까..?"));
		questionRepository.save(new Question("공강 시간 과방에서 혼자 쉬고 있던 중 처음보는 학생이 문을 열고 들어왔다. 이 때 나의 행동은?"));

		questionRepository.save(new Question("친구가 급하게 전공책을 빌려달라고 한다. 이 때 나의 모습은?"));
		questionRepository.save(new Question("친구가 카톡 메세지를 읽고 오랫동안 답장이 없다. 이때 나는 무슨 생각을 하게 될까?"));
		questionRepository.save(new Question("교양 수업에서의 토론시간, 나의 모습은?"));

		questionRepository.save(new Question("조별과제의 PPT담당이 만들어온 PPT의 퀄리티가 썩 좋지 않다. 이 때 나의 행동은?"));
		questionRepository.save(new Question("시험의 마지막 문제 ‘당신의 창업 아이디어를 서술하시오’. 나의 아이디어는?"));
		questionRepository.save(new Question("드디어 종강! 그러나 친구는 공부한 것에 비해 학점이 좋지 않다며 우울해한다. 이 때 나의 대답은?"));
	}
}
