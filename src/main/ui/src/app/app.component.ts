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

  item: any;

  imgURL: string;



  constructor(private itemService: ItemService) {
  }

  getData(){
    this.items = this.itemService.getItems().subscribe(
      (data: any) => this.items = data
    )
  }

  getDataById(id:number){
    this.item = this.itemService.getItemById(id).subscribe(
      (data: any) => this.item = data
    )
  }

  clearData(){
    this.items=null;
    this.item=null;
  }


}
