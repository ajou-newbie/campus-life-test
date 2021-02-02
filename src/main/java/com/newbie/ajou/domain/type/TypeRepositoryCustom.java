package com.newbie.ajou.domain.type;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class TypeRepositoryCustom {
	private final TypeRepository typeRepository;

	public List<Type> findAll() {
		return typeRepository.findAll();
	}

	public Type findByName(String name) {
		return typeRepository.findByName(name)
				.orElseThrow();
	}

	@PostConstruct
	public void init() {
		typeRepository.save(new Type("istj"));
		typeRepository.save(new Type("isfj"));
		typeRepository.save(new Type("infj"));
		typeRepository.save(new Type("intj"));
		typeRepository.save(new Type("istp"));
		typeRepository.save(new Type("isfp"));
		typeRepository.save(new Type("infp"));
		typeRepository.save(new Type("intp"));
		typeRepository.save(new Type("estp"));
		typeRepository.save(new Type("esfp"));
		typeRepository.save(new Type("enfp"));
		typeRepository.save(new Type("entp"));
		typeRepository.save(new Type("estj"));
		typeRepository.save(new Type("esfj"));
		typeRepository.save(new Type("enfj"));
		typeRepository.save(new Type("entj"));
	}
}
