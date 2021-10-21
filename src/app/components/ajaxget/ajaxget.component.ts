import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-ajaxget',
  templateUrl: './ajaxget.component.html',
  styleUrls: ['./ajaxget.component.css']
})
export class AjaxgetComponent implements OnInit {
  
  myData  : any ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.http.get('https://gorest.co.in/public/v1/users').subscribe(res=>{
      console.log(res);
      this.myData = res;
      this.myData = this.myData.data 
      console.log("This is myData : ",this.myData );
    });  
  }

}
