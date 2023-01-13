import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }


  getCardDetails(): any {
    return this.http.get(environment.card_get_api_path);
    
  }

  createCardDetails(obj: any): any {
    console.log("data" + JSON.stringify(this.http.post(environment.card_post_api_path , obj)));
    return this.http.post(environment.card_post_api_path , obj);
  }



}
