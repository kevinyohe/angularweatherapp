import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    //b315b15ee6ae72dc4cc226ad43fe75a1
    //https://api.weatherstack.com/current
    return this.http.get('http://api.weatherstack.com/current?access_key=b315b15ee6ae72dc4cc226ad43fe75a1&query='+location)
  }
}
