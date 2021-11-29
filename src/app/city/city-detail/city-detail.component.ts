import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  providers: [CityService],
})
export class CityDetailComponent implements OnInit {
  constructor(
    private cityService: CityService,
    private activatedRoute: ActivatedRoute
  ) {}
  city!: City;
  ngOnInit() {
    this.activatedRoute.params
      .pipe(map((params) => params.cityId))
      .subscribe((cityId) => {
        this.cityService.getCity(cityId).subscribe((data: City) => {
          this.city = data;
        });
      });
    this.function();
  }
  number1: number = 0;
  function() {
    this.number1 = Math.ceil(Math.random() * 2 + 15);
  }
}
