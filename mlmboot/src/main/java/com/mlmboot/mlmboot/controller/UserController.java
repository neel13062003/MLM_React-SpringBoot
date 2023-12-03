package com.mlmboot.mlmboot.controller;

import com.mlmboot.mlmboot.services.UserService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
    private final UserService userService;

    
    public UserController(UserService userService) {
        this.userService = userService;
    }

//    @PostMapping("/login")
//    public String login(@RequestParam String username, @RequestParam String password) {
//        return userService.login(username, password) ? "Login successful" : "Invalid credentials";
//    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        return userService.login(username, password) ?
                ResponseEntity.ok("Login successful") :
                ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }

//    @PostMapping("/signup")
//    public String signUp(@RequestParam String username, @RequestParam String password) {
//        return userService.signUp(username, password) ? "User created successfully" : "User already exists";
//    }
    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        return userService.signUp(username, password) ?
                ResponseEntity.ok("User created successfully") :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists");
    }
}
