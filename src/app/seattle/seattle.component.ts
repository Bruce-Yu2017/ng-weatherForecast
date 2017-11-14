import { Component, OnInit } from '@angular/core';
import {WeatherService } from "./../weather.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css'],
})
export class SeattleComponent implements OnInit {
  humidity;
  avg;
  high;
  low;
  status;
  cityid = "5809844";
  constructor(private _weatherService: WeatherService) {
    this._weatherService.retrieveWeather(this.cityid, (weather) => {
      this.humidity = weather.main.humidity;
      this.avg = weather.main.temp;
      this.high = weather.main.temp_max;
      this.low = weather.main.temp_min;
      this.status = weather.weather[0].description;
    })
   }

  ngOnInit() {
  }

}
