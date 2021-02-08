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
		questionRepository.save(new Question("합격 발표 후 과 단톡방에 초대되었다. 대학 생활을 함께할 동기들과 대화할 수 있는 첫 기회. 단톡방 속 나의 행동은?"));
		questionRepository.save(new Question("새 학기가 시작되네요! 수강신청 시즌 나의 모습은?"));
		questionRepository.save(new Question("새내기로 처음 듣게 된 대학 강의에서 교수님께서 한명씩 일어나 자기소개를 해보자고 하신다. 이 때 나의 모습은?"));

		questionRepository.save(new Question("오늘의 첫 수업은 1교시! 하지만 눈떠보니 8시 55분, 학교까지는 뛰어서 5분. 나의 행동은?"));
		questionRepository.save(new Question("수업 시작 전, 잠깐 화장실을 갔다온 사이 내 책상 위에 초코우유가 하나 놓여있다. 이건..뭘까..?"));
		questionRepository.save(new Question("다음 수업 시간까지 시간이 남아 과방에서 혼자 쉬고 있던 중 처음보는 학생이 문을 열고 들어왔다. 이 때 나의 행동은?"));
	}
}
