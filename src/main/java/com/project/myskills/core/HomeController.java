package com.project.myskills.core;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	@GetMapping
	public String iamAlive() {
		return "IamAlive";
	}

}
