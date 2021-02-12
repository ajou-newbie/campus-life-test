package com.newbie.ajou.service;

import com.newbie.ajou.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class UserCountServiceImpl implements UserCountService {
	private final UserRepository userRepository;

	@Transactional(readOnly = true)
	public Long count() {
		return userRepository.count();
	}
}
