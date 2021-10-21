import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentdateService {

  constructor() { }

  getCurrentDate() {
    let d = new Date();
    return d;
  }
  
}
