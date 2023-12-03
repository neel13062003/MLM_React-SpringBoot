package com.mlmboot.mlmboot.services;

import com.mlmboot.mlmboot.repository.AddTeamRepository;
import com.mlmboot.mlmboot.repository.UserRepository;
import com.mlmboot.mlmboot.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AddTeamServiceImpl implements AddTeamService{
	
	
	private final AddTeamRepository addTeamRepository;

	@Autowired
    public AddTeamServiceImpl(AddTeamRepository addTeamRepository) {
        this.addTeamRepository = addTeamRepository;
    }

    @Override
    public boolean addTeam(String name, String upline, String amount) {
        // Additional business logic if needed
        return addTeamRepository.saveTeam(name, upline, amount);
    }
}
