package com.mlmboot.mlmboot.services;


import com.mlmboot.mlmboot.repository.UserRepository;
import com.mlmboot.mlmboot.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    @Override
    public boolean login(String username, String password) {
        return userRepository.isValidUser(username, password);
    }

    @Transactional
    @Override
    public boolean signUp(String username, String password) {
        if (userRepository.isNewUser(username)) {
            userRepository.createUser(username, password); // Add this line to create the user
            return true;
        }
        return false;
    }
}
