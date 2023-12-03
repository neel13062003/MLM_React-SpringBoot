package com.mlmboot.mlmboot.controller;

import com.mlmboot.mlmboot.model.TeamMemberDTO;
import com.mlmboot.mlmboot.services.SeeTeamIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class SeeTeamIdController {

    @Autowired
    private SeeTeamIdService seeTeamIdService;

    @GetMapping("/id")
    public ResponseEntity<List<TeamMemberDTO>> getTeamMembers(@RequestParam String name) {
        try {
            List<TeamMemberDTO> teamMembers = seeTeamIdService.getTeamMembers(name);
            return new ResponseEntity<>(teamMembers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
