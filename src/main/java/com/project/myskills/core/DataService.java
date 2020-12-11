package com.project.myskills.core;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.myskills.core.model.Item;

@RestController
@RequestMapping(value = "api")
public class DataService {

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "items", method = RequestMethod.GET, produces = { "application/json" })
	List<Item> getAllItems() {

		List<Item> items = new ArrayList<Item>();

		Item ite1 = new Item();
		ite1.setId(1);
		ite1.setName("Item-01");
		ite1.setCreatedBy("System");
		ite1.setCreatedDate(new Date());
		ite1.setUpdatedBy("System");
		ite1.setUpdatedDate(new Date());
		items.add(ite1);

		Item ite2 = new Item();
		ite2.setId(2);
		ite2.setName("Item-02");
		ite2.setCreatedBy("System");
		ite2.setCreatedDate(new Date());
		ite2.setUpdatedBy("System");
		ite2.setUpdatedDate(new Date());
		items.add(ite2);

		Item ite3 = new Item();
		ite3.setId(3);
		ite3.setName("Item-03");
		ite3.setCreatedBy("System");
		ite3.setCreatedDate(new Date());
		ite3.setUpdatedBy("System");
		ite3.setUpdatedDate(new Date());
		items.add(ite3);
		return items;

	}

}
