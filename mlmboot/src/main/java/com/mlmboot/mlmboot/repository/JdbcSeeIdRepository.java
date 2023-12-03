package com.mlmboot.mlmboot.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class JdbcSeeIdRepository {
	 
	 @Autowired
	 private JdbcTemplate jdbcTemplate;

	 public List<Map<String, Object>> findAll() {
	     String sql = "SELECT id, name FROM members";
	     return jdbcTemplate.queryForList(sql);
	 }
}
