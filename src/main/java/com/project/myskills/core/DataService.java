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

		Item ite1 = new Item();
		ite1.setId(1);
		ite1.setName("Item-01");
		ite1.setCreatedBy("System");
		ite1.setCreatedDate(new Date());
		ite1.setUpdatedBy("System");
		ite1.setUpdatedDate(new Date());
		ite1.setUrl("https://cdn.britannica.com/86/75886-050-B481C97E/Apricots.jpg");
		items.add(ite1);

		Item ite2 = new Item();
		ite2.setId(2);
		ite2.setName("Item-02");
		ite2.setCreatedBy("System");
		ite2.setCreatedDate(new Date());
		ite2.setUpdatedBy("System");
		ite2.setUpdatedDate(new Date());
		ite2.setUrl("https://img.freepik.com/free-psd/smartphone-cover-case-mockup_358694-147.jpg");
		items.add(ite2);

		Item ite3 = new Item();
		ite3.setId(3);
		ite3.setName("Item-03");
		ite3.setCreatedBy("System");
		ite3.setCreatedDate(new Date());
		ite3.setUpdatedBy("System");
		ite3.setUpdatedDate(new Date());
		ite3.setUrl("https://img.freepik.com/free-photo/jug-rice-milk-with-rice-plant-rice-seed-put-wooden-floor_1150-34547.jpg");
		items.add(ite3);
		return items;
	}

}
