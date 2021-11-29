import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-detail-place',
  templateUrl: './city-detail-place.component.html',
  styleUrls: ['./city-detail-place.component.css'],
  providers: [CityService],
})
export class CityDetailPlaceComponent implements OnInit {
  constructor(
    private cityService: CityService,
    private activatedRoute: ActivatedRoute
  ) {}
  city!: City;
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(map((params) => params.cityId))
      .subscribe((cityId) => {
        this.cityService.getCity(cityId).subscribe((data: City) => {
          this.city = data;
        });
      });
  }
  scrollTo() {
    document.getElementById('scrollTo')?.scrollIntoView();
  }
}
