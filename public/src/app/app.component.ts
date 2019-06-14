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
  clicked = false;
  stats = false;
  task = [];

  constructor(private _httpService: HttpService){
  }
  // ngOnInit(){
  //   this.getTasksFromService()
  // }
  getTasksFromService(){
    this.clicked = true;
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("got our Tasks!", data);
      // for(let x in data){
      //  this.tasks = data[x];
      // }
      this.tasks = data.data;
      console.log(data.data);
    })
  }

  getTaskFromService(id: any){
    this.stats = true;
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log("got the Task!", data)
      console.log(data.data)
      this.task = data.data;
    })
  }
  

  showStats(id: any): void{
    console.log(id);
    // let observable = this._httpService.getTasks()
    // observable.subscribe(data => {
    //   console.log("got our Tasks!", data);
      // for(let x in data){
      //  this.tasks = data[x];
      // }
      // this.tasks = data.data;
      // console.log(data.data);
  }
}