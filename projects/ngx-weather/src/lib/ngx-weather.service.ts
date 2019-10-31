import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NgxWeatherService {

  url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  apiKey = '5234de58ea750ce588b9971d8338cebc';

constructor(private http: HttpClient) { }


getWeatherByCityName(cityName: string, countyCode): Observable<any> {
  return this.http.get<any>(this.url + cityName + ',' + countyCode + '&units=metric&APPID=' + this.apiKey);
}

}
