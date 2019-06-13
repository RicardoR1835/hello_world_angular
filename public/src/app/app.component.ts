import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks = [];
  link = "https://angular.io/tutorial";

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.getTasksFromService()
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("got our Tasks!", data);
      // for(let x in data){
      //  this.tasks = data[x];
      // }
      this.tasks = data.data;
      console.log(data.data)
    })
  }
}