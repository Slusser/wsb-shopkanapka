import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sandwich } from './sandwich';

@Injectable({
  providedIn: 'root'
})
export class SandwichService {
  private url: string = 'http://localhost:3000/sandwiches';

  constructor(private httpClient: HttpClient) {}

  public postSandwich(sandwich: Sandwich){
    return this.httpClient.post(this.url, sandwich).toPromise()
  }

  public getSandwiches(){
    return this.httpClient.get(this.url).toPromise();
  }

  public getSandwich(id: string | number){
    return this.httpClient.get(`${this.url}/${id}`).toPromise();
  }

  public querrySandwiches(querry: string){
    return this.httpClient.get(`${this.url}?q=${querry}`).toPromise();
  }

}
