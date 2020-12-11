import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: any;

  constructor(private httpClient: HttpClient) {
  }


  getItems() {
    return this.httpClient.get('http://localhost:8080/api/items')
  }
}
