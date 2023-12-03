package com.mlmboot.mlmboot.repository;

public interface UserRepository {
	boolean isValidUser(String username, String password);
    boolean isNewUser(String username);
    void createUser(String username, String password);
}
