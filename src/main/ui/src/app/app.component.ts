import { Component } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';

  items: any;



  constructor(private itemService: ItemService) {
  }

  getData(){
    this.items = this.itemService.getItems().subscribe(
      (data: any) => this.items = data
    )
  }

  clearData(){
    this.items=null;
  }


}
