package com.hamuse.web.user;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
	 /*  public void insertUser(User user);
	    public User selectUserByIdPw(User user);
	    public int existId(String uid);
	    public int countUsers();
	    public void createDB(HashMap<String,String> paramMap);
	    public void createUser(HashMap<String,String> paramMap);
	    public void dropUser(HashMap<String,String> paramMap);
	    public void truncateUser(HashMap<String,String> paramMap);*/
	    public int rowCount();
	    public List<User> selectAll();
}