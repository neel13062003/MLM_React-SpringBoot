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

import com.mlmboot.mlmboot.services.AddAmountService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AddAmountController {

	private final AddAmountService addAmountService;

	@Autowired
    public AddAmountController(AddAmountService addAmountService) {
        this.addAmountService = addAmountService;
    }

    @PostMapping("/addAmount")
    public ResponseEntity<String> addAmount(@RequestBody Map<String, String> request) {
        String name = request.get("name");
        String amount = request.get("amount");

        if (name != null && amount != null) {
            return addAmountService.addAmount(name, amount) ?
                    ResponseEntity.ok("Amount added successfully") :
                    ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Missing required parameters");
        }
    }
	
}
