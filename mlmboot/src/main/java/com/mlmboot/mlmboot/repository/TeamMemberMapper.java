package com.mlmboot.mlmboot.repository;
import com.mlmboot.mlmboot.model.TeamMemberDTO;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TeamMemberMapper implements RowMapper<TeamMemberDTO> {

    @Override
    public TeamMemberDTO mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        TeamMemberDTO teamMemberDTO = new TeamMemberDTO();
        teamMemberDTO.setName(resultSet.getString("name"));
        teamMemberDTO.setLevel(resultSet.getInt("level"));
        return teamMemberDTO;
    }
}