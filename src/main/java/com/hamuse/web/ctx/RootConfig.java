package com.hamuse.web.ctx;

import javax.sql.DataSource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
@MapperScan(basePackages = {"com.hamuse.web"})
@ComponentScan(basePackages = {"com.hamuse.web"})
@Import({
	Mybatisconfig.class , ServletConfig.class
})
public class RootConfig {
		@Bean
		public DataSource dataSource() {
			HikariConfig hikariConfig = new HikariConfig();
			hikariConfig.setDriverClassName("org.mariadb.jdbc.Driver");
			hikariConfig.setJdbcUrl("jdbc:mariadb://172.168.0.121/wegodb");
			hikariConfig.setUsername("wego");
			hikariConfig.setPassword("wego");
			
			HikariDataSource dataSource =new HikariDataSource(hikariConfig);
			
			return dataSource;
		}
		@Bean
		public DataSourceTransactionManager txManager() {
			return new DataSourceTransactionManager(dataSource());
		}
	
	
}