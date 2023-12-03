package com.mlmboot.mlmboot.repository;
import java.util.List;
import com.mlmboot.mlmboot.model.TeamMemberDTO;

public interface SeeTeamIdRepository {
	 List<TeamMemberDTO> findTeamMembers(String name);
}