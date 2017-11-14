import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class WeatherService {
  apikey = "2255169934e2c7955d2b19f8540bfba5";
  constructor(private _http: Http) { }
  retrieveWeather(cityid, callback) {
    this._http.get("http://api.openweathermap.org/data/2.5/weather?id=" + cityid + "&APPID=" + this.apikey).subscribe(
      (response) => {
        callback(response.json());
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
