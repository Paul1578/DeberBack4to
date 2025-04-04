import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCostumerService {

  private url =  "https://dragonball-api.com/api"

  constructor(private http: HttpClient) {}

  getCharacters(): Observable <any>{
    return this.http.get(`${this.url}/characters`)
  }

  getPlanets(): Observable <any>{
    return this.http.get(`${this.url}/planets`)
  }
}
