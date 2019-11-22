package com.hamuse.web.proxy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Calculator {
	@Autowired Box<Integer> box;
	public int sum(int a , int b) {
		box.put("c", a+b);
		return box.get("c");
	}
	public int sub(int a , int b) {
		return a-b;
	}
	public int abs(int a) { //abs 는 절대값
		return Math.abs(a);
	}
}
