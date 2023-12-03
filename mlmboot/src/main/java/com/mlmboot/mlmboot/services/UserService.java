package com.mlmboot.mlmboot.services;

public interface UserService {
    boolean login(String username, String password);
    boolean signUp(String username, String password);
}