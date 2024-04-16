import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from '../weather-info.service';

@Component({
  selector: 'weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  weatherData: any;
  city: string = '';
  constructor(private weatherService: WeatherInfoService) {}

  ngOnInit(): void {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data: any) => {
      this.weatherData = data;
      console.log(data);
    });
  }
}
