package com.nvisia.elasticsearch.employeeportal.repository;

import com.nvisia.elasticsearch.employeeportal.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
