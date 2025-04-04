import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiCostumerService } from './api-costumer.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  characters: any[] = [] 
  
  planets: any[] = [] 

  constructor(private apiService: ApiCostumerService){}
  ngOnInit() {
    this.apiService.getCharacters().subscribe((data) => {
      this.characters = data.items; 
    });
  
    this.apiService.getPlanets().subscribe((data) => {
      this.planets = data.items; 
    });
  }

}
