import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxWeatherModule } from 'projects/ngx-weather/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
