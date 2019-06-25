package com.nvisia.elasticsearch.customerportal.repository;

import com.nvisia.elasticsearch.customerportal.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
