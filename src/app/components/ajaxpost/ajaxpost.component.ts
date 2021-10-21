import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajaxpost',
  templateUrl: './ajaxpost.component.html',
  styleUrls: ['./ajaxpost.component.css']
})
export class AjaxpostComponent implements OnInit {

  newUser : any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  postData(name:String, job:String)
  {
    console.log("Name : ", name);
    
    this.http.post(
      'https://reqres.in/api/users',
      {
        "name" : name,
        "job" : job      
      }
    ).subscribe(res =>{
      console.log("This is Response : ",res);
      this.newUser = res;
      console.log("This is New User : ", this.newUser);
      
    });
  }

}
