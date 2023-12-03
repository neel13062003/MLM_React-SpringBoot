package com.mlmboot.mlmboot.services;


import com.mlmboot.mlmboot.repository.JdbcSeeIdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SeeIdServiceImpl implements SeeIdService{
	 @Autowired
	    private JdbcSeeIdRepository jdbcSeeIdRepository;

	    @Override
	    public List<Map<String, String>> getSeeIdData() {
	        List<Map<String, Object>> result = jdbcSeeIdRepository.findAll();

	        return result.stream()
	                .map(row -> {
	                    Map<String, String> data = row.entrySet().stream()
	                            .collect(Collectors.toMap(
	                                    entry -> entry.getKey(),
	                                    entry -> entry.getValue().toString()
	                            ));
	                    return data;
	                })
	                .collect(Collectors.toList());
	    }
}
