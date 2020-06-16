import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
             private apixuService: ApixuService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    })
  }

  sendToAPIXU(formVales){
    console.log(formVales);
    this.apixuService.getWeather(formVales.location)
    .subscribe(data=> console.log(data));
  }
}
