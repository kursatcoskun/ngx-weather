import { NgModule } from '@angular/core';
import { NgxWeatherComponent } from './ngx-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NgxWeatherComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [NgxWeatherComponent]
})
export class NgxWeatherModule { }
