package com.project.myskills.core;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.websocket.server.PathParam;

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
		return allItems();
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "getById", method = RequestMethod.GET, produces = { "application/json" })
	Item getItemById(@PathParam("id") Long id) {
		List<Item> desiredItems = allItems().stream().filter(ite -> ite.getId() == id).collect(Collectors.toList());
		return desiredItems.get(0);
	}

	static List<Item> allItems() {
		List<Item> items = new ArrayList<Item>();

		for(int i=1;i<10;i++) {
			Item ite1 = new Item();
			ite1.setId(i);
			ite1.setName("Item-"+i);
			ite1.setPrice(i*100/75);
			ite1.setCreatedBy("System");
			ite1.setCreatedDate(new Date());
			ite1.setUpdatedBy("System");
			ite1.setUpdatedDate(new Date());
			ite1.setUrl("image-0"+i);
			items.add(ite1);
		}
		return items;
	}

}
