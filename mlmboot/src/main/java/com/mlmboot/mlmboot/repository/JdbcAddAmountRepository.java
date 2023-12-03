package com.mlmboot.mlmboot.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcAddAmountRepository implements AddAmountRepository{
	 private final JdbcTemplate jdbcTemplate;

	    @Autowired
	    public JdbcAddAmountRepository(JdbcTemplate jdbcTemplate) {
	        this.jdbcTemplate = jdbcTemplate;
	    }

	    @Override
	    public boolean addAmount(String name, String amount) {
	    	
	    	 // Convert amount to integer
	        int amountValue = Integer.parseInt(amount);
	    	
	        // Implement the SQL query to add the amount to the user's previous amount
	        String sql = "UPDATE members SET amount = amount + ? WHERE name = ?";
	        int affectedRows = jdbcTemplate.update(sql, amountValue, name);
	        return affectedRows > 0;
	    }
}
