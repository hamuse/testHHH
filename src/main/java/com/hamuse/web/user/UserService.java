package com.hamuse.web.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hamuse.web.proxy.Proxy;

@Component
public class UserService extends Proxy {
	// 스트림
	@Autowired UserMapper userMapper;
	
	public String rowCount() {
	/*	1. List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
		   Stream<Integer> intStream = list.stream(); // stream 타입으로 변경되는것*/	
		/*2. Stream<Integer> intStream =  Arrays.asList(1, 2, 3, 4, 5).stream();*/ // stream 타입으로 변경되는것
		/*3.Arrays.asList(1, 2, 3, 4, 5).stream().forEach(System.out :: print);*/
		// stream안에 for 기능있다.
		/*intStream.forEach(System.out::print); */// forEach() mathod
		// 메소드 참조 변수
		/*int i = 1;
		for (; i <= 10; i++) {
			System.out.println(i + "+");
		}
		return string(i);*/
		/*4.*/
		/*IntStream.rangeClosed(101, 200).forEach(System.out :: print);*/
		/*5.*/
		new Random().ints().limit(5).forEach(System.out :: print);
		return string(5);
	}
	public String selectAll() {
//		userMapper.selectAll().forEach(System.out :: print);;
		List<User> ls = userMapper.selectAll();
		List<String> ls2 = new ArrayList<>();
		for(int i =0; i < ls.size(); i++) {
			ls2.add(ls.get(i).getUid());
		}
		Stream.of(ls2)
		.sorted()
		.forEach(System.out :: println);
		return string("5");
	}
}
