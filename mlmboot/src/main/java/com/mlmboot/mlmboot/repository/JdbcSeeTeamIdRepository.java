package com.mlmboot.mlmboot.repository;

import com.mlmboot.mlmboot.model.TeamMemberDTO;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class JdbcSeeTeamIdRepository implements SeeTeamIdRepository {

    private final JdbcTemplate jdbcTemplate;

    public JdbcSeeTeamIdRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<TeamMemberDTO> findTeamMembers(String name) {
        String sql = "WITH RECURSIVE member_tree AS (" +
                     "  SELECT id, name, upline_id, 1 as level FROM members WHERE name = ?" +
                     "  UNION ALL" +
                     "  SELECT m.id, m.name, m.upline_id, mt.level + 1" +
                     "  FROM members m" +
                     "  JOIN member_tree mt ON m.upline_id = mt.id" +
                     ")" +
                     "SELECT name, level FROM member_tree";
        return jdbcTemplate.query(sql, new Object[]{name}, new TeamMemberMapper());
    }
}
