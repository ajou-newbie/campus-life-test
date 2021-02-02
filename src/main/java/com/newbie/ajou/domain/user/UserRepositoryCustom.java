package com.newbie.ajou.domain.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class UserRepositoryCustom {
	private final UserRepository userRepository;

	public List<User> findAll() {
		return userRepository.findAll();
	}

	public User save(User user) {
		return userRepository.save(user);
	}

	public void deleteAll() {
		userRepository.deleteAll();
	}

	@PostConstruct
	public void init() {
	}
}
