package com.hamuse.web.user;

import java.util.logging.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hamuse.web.proxy.Box;
import com.hamuse.web.proxy.Proxy;

@RestController
@RequestMapping("/users")
public class UserCtrl {
			@Autowired UserMapper userMapper; 
			@Autowired Box<Integer> box;
			@Autowired Proxy pxy;
			
			public int rowCount(){
				
				int rowCount = userMapper.rowCount();
				pxy.print("rowCount:"+rowCount);
				box.put("rowCount", rowCount);
				return box.get("rowCount");
			}
 			
}
