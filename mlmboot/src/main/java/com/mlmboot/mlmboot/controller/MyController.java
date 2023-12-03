package com.mlmboot.mlmboot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class MyController {

	
	@GetMapping("/home")
	public String home() {
		return "Welcome to Spring Boot MLM Project kalp";
	}
}
