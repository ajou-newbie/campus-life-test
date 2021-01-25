package com.newbie.ajou.domain.college;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CollegeRepository extends JpaRepository<College, Long> {
	College findByName(String name);
}
