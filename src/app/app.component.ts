import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiCostumerService } from './api-costumer.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [ HttpClientModule, CommonModule, MatCardModule, MatChipsModule, MatProgressBarModule, MatToolbarModule,MatButtonModule, MatIconModule],
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
