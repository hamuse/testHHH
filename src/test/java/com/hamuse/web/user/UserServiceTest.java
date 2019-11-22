package com.hamuse.web.user;

import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import  org.springframework.beans.factory.annotation.Autowired;
import  org.springframework.test.context.ContextConfiguration;
import  org.springframework.test.context.web.AnnotationConfigWebContextLoader;
import  org.springframework.test.context.web.WebAppConfiguration;
import  org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.hamuse.web.ctx.ServletConfig;

import jdk.nashorn.internal.ir.annotations.Ignore;

import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.core.Is.is;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {ServletConfig.class}, loader = AnnotationConfigWebContextLoader.class)
@WebAppConfiguration
public class UserServiceTest {
	
	@Autowired UserService userService;
	@Ignore
	public void testTest() {
		assertThat(null, is(equalTo("11")));
	}
	@Test
	public void testSelectAll() {
		assertThat(userService.selectAll(), is(equalTo("5")));
	}

}
