package com.hamuse.web.proxy;

import static org.junit.Assert.*;
import javax.servlet.ServletContext;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import  org.springframework.beans.factory.annotation.Autowired;
import  org.springframework.mock.web.MockServletContext;
import  org.springframework.test.context.ContextConfiguration;
import  org.springframework.test.context.web.AnnotationConfigWebContextLoader;
import  org.springframework.test.context.web.WebAppConfiguration;
import  org.springframework.test.web.servlet.MockMvc;
import  org.springframework.test.web.servlet.setup.MockMvcBuilders;
import  org.springframework.web.context.WebApplicationContext;
import  org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.hamuse.web.ctx.RootConfig;
import com.hamuse.web.ctx.WebConfig;
import com.hamuse.web.ctx.ServletConfig;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.core.Is.is;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {ServletConfig.class}, loader = AnnotationConfigWebContextLoader.class)
@WebAppConfiguration
public class CalculatorTest {
	@Autowired Calculator calculator;
//	final Calculator cal = new Calculator();
	
	
	@Test
	public void testSum() {
		/*assertThat(cal.sum(1,4), is(equalTo(5)));*/
		assertThat(calculator.sum(1,4), is(equalTo(5)));
	}

	@Ignore
	public void testSub() {
		fail("Not yet implemented");
	}

	@Ignore
	public void testAbs() {
		fail("Not yet implemented");
	}

}
