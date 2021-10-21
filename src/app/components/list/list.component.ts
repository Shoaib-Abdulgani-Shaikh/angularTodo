import { Component, OnInit } from '@angular/core';
import { CurrentdateService } from 'src/app/services/currentdate.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Title: String = "Demo";
  cIndex : number = 0;
  Tasks : Array<String> = []
  todaydate : any;
  
  constructor(private currentDate : CurrentdateService) {
  }

  ngOnInit(): void {
    this.todaydate = this.currentDate.getCurrentDate();
    console.log("This is Todays date in List Component : ",this.todaydate);
  }

  addTask(newTask: String): void{
    this.Tasks.push(newTask);
  }

  removeTask(color:String)
  {
    this.cIndex = this.Tasks.indexOf(color);
    this.Tasks.splice(this.cIndex,1)
  }

  
}
