package com.mlmboot.mlmboot.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcAddFdRepository implements AddFdRepository{
	private final JdbcTemplate jdbcTemplate;

    @Autowired
    public JdbcAddFdRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public boolean addFd(String name, String fd) {
    	
    	 // Convert amount to integer
        int amountValue = Integer.parseInt(fd);
    	
        // Implement the SQL query to add the fd to the user's previous amount
        String sql = "UPDATE members SET fd = fd + ? WHERE name = ?";
        int affectedRows = jdbcTemplate.update(sql, amountValue, name);
        return affectedRows > 0;
    }
}
