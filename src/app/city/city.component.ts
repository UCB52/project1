import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { City } from '../models/city';
import { CityService } from '../services/city.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService],
})
export class CityComponent implements OnInit {
  constructor(
    private cityService: CityService,
    private dataService: DataService,
    private title:Title
  ) {}
  filterText!: string;
  ngOnInit(): void {
    this.cityService.getCities().subscribe((data) => {
      this.cities = data;
    });
    this.dataService.currentMessage.subscribe((data) => {
      this.filterText = data;
    });
    this.title.setTitle('City Guide');
  }
  cities: City[] = [];  
}
