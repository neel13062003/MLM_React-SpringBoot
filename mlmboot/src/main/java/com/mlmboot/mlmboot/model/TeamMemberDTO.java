package com.mlmboot.mlmboot.model;

public class TeamMemberDTO {
    private String name;
    private int level;

    public TeamMemberDTO() {
    }

    public TeamMemberDTO(String name, int level) {
        this.name = name;
        this.level = level;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    @Override
    public String toString() {
        return "TeamMemberDTO{" +
               "name='" + name + '\'' +
               ", level=" + level +
               '}';
    }
}
