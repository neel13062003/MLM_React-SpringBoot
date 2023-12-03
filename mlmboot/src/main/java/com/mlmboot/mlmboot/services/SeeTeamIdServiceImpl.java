package com.mlmboot.mlmboot.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mlmboot.mlmboot.model.TeamMemberDTO;
import com.mlmboot.mlmboot.repository.SeeTeamIdRepository;

import java.util.List;

@Service
public class SeeTeamIdServiceImpl implements SeeTeamIdService {

	@Autowired
    private SeeTeamIdRepository seeTeamIdRepository;

    @Override
    public List<TeamMemberDTO> getTeamMembers(String name) {
        return seeTeamIdRepository.findTeamMembers(name);
    }
}