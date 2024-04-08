import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherInfoService {
  constructor(private http: HttpClient) {}

  getUrl() {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=New%20York%20&appid=b646987be1518a2a1730f4e71113de11&units=imperial'
    );
  }
}
