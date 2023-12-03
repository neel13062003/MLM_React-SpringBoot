package com.mlmboot.mlmboot.controller;

import com.mlmboot.mlmboot.services.SeeIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class SeeIdController {
	 	private final SeeIdService seeIdService;

	    @Autowired
	    public SeeIdController(SeeIdService seeIdService) {
	        this.seeIdService = seeIdService;
	    }

	    @GetMapping(value = "/seeIdTeam", produces = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<List<Map<String, String>>> seeIdTeam() {
	        List<Map<String, String>> result = seeIdService.getSeeIdData();
	        return new ResponseEntity<>(result, HttpStatus.OK);
	    }
}
