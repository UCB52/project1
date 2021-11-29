import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-right-banner',
  templateUrl: './right-banner.component.html',
  styleUrls: ['./right-banner.component.css'],
  providers:[CityService]
})
export class RightBannerComponent implements OnInit {

  constructor(private cityService:CityService) { }
  cities!:City[];
  ngOnInit(): void {
    this.cityService.getCities().subscribe((data) => {
      this.cities = data;
    });
  }  
  
}
