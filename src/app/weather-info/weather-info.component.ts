import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from '../weather-info.service';

@Component({
  selector: 'weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  WeatherData: any;
  summary: string = '';
  temp: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
  pressure: number = 0;
  humidity: number = 0;
  feel_like: number = 0;

  constructor(private weatherService: WeatherInfoService) {}

  ngOnInit(): void {
    this.weatherService.getUrl().subscribe({
      next: (app) => {
        console.log(app);
        this.WeatherData = app;
        this.summary = this.WeatherData.weather[0].main;
        this.temp = this.WeatherData.main.temp;
        this.temp_min = this.WeatherData.main.temp_min;
        this.temp_max = this.WeatherData.main.temp_max;
        this.pressure = this.WeatherData.main.pressure;
        this.humidity = this.WeatherData.main.humidity;
        this.feel_like = this.WeatherData.main.feel_like;
      },
      error: (err) => console.log(err.message),
      complete: () => console.log('api completed'),
    });
  }
}
