import { Component, OnInit } from '@angular/core';
import {CurrentdateService} from 'src/app/services/currentdate.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todayDate : any;
  constructor( private currentDate : CurrentdateService) {}

  ngOnInit(): void {
  
    this.todayDate = this.currentDate.getCurrentDate();
    console.log("This is Todays Date in Home Component: ", this.todayDate);
  
  }

}
