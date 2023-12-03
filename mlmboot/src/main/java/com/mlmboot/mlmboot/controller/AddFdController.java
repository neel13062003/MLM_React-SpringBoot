package com.mlmboot.mlmboot.controller;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mlmboot.mlmboot.services.AddFdService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AddFdController {
	private final AddFdService addFdService;

	@Autowired
    public AddFdController(AddFdService addFdService) {
        this.addFdService = addFdService;
    }

    @PostMapping("/addFd")
    public ResponseEntity<String> addFd(@RequestBody Map<String, String> request) {
        String name = request.get("name");
        String fd = request.get("fd");

        if (name != null && fd != null) {
            return addFdService.addFd(name, fd) ?
                    ResponseEntity.ok("Amount added successfully") :
                    ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Missing required parameters");
        }
    }
}
