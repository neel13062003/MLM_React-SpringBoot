package com.mlmboot.mlmboot.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mlmboot.mlmboot.services.AddTeamService;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AddTeamController {

    private final AddTeamService addTeamService;

    @Autowired
    public AddTeamController(AddTeamService addTeamService) {
        this.addTeamService = addTeamService;
    }

//    @PostMapping("/addTeam")
    @PostMapping(value = "/addTeam", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> addTeam(@RequestBody Map<String, String> request) {
        String name = request.get("name");
        String upline = request.get("upline");
        String amount = request.get("amount");

        if (name != null && upline != null && amount != null) {
            return addTeamService.addTeam(name, upline, amount) ?
                    ResponseEntity.ok("Add Team successful") :
                    ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Missing required parameters");
        }
    }
}


