package com.mlmboot.mlmboot.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcAddTeamRepository implements AddTeamRepository{
	private final JdbcTemplate jdbcTemplate;

    @Autowired
    public JdbcAddTeamRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public boolean saveTeam(String name, String upline, String amount) {
    	 // Assuming fd is also a string
        int fd = 0;
        
        // Convert amount to integer
        int amountValue = Integer.parseInt(amount);

        String sql = "INSERT INTO members (name, upline, amount, fd) VALUES (?, ?, ?, ?)";
        int affectedRows = jdbcTemplate.update(sql, name, upline, amountValue, fd);
        return affectedRows > 0;
    }
}
