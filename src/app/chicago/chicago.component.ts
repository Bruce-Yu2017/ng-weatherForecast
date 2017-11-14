import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {WeatherService } from "./../weather.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChicagoComponent implements OnInit {
  humidity;
  avg;
  high;
  low;
  status;
  cityid = "4887398";
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
