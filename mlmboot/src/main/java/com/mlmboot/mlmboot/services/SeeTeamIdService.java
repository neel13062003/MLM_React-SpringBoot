package com.mlmboot.mlmboot.services;
import java.util.List;

import com.mlmboot.mlmboot.model.TeamMemberDTO;

public interface SeeTeamIdService {
	 List<TeamMemberDTO> getTeamMembers(String name);
}
