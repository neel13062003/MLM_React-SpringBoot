package com.mlmboot.mlmboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mlmboot.mlmboot.repository.AddFdRepository;

@Service
public class AddFdServiceImpl implements AddFdService{
	private final AddFdRepository addFdRepository;

    @Autowired
    public AddFdServiceImpl(AddFdRepository addFdRepository) {
        this.addFdRepository = addFdRepository;
    }

    @Override
    public boolean addFd(String name, String fd) {
        // Implement the logic to add the provided amount to the user's previous amount
        // Use addAmountRepository to interact with the database
        return addFdRepository.addFd(name, fd);
    }
}
