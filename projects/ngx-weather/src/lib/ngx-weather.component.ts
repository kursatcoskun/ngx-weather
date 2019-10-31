import { Component, OnInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { NgxWeatherService } from './ngx-weather.service';

@Component({
  selector: 'ngx-weather',
  templateUrl: './ngx-weather.component.html',
  styleUrls: ['./ngx-weather.component.scss']
})
export class NgxWeatherComponent implements OnInit {

 @Input('cityName') cityName: string;
 @Input('countryCode') countryCode: string;
  weatherData: any;
  constructor(private weatherService: NgxWeatherService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.cityName !== undefined && this.countryCode !== undefined) {
      this.getWeatherByCityName();
    }
  }



  getWeatherByCityName() {
    this.weatherService.getWeatherByCityName(this.cityName, this.countryCode).subscribe(response => {
      this.weatherData = response;
    });

  }

}
