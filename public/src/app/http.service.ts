import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getTask();
    this.createTask();
    this.editTask();
    this.deleteTask();
  }
  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("got our Tasks!", data));
  }
  getTask(){
    let tempObservable = this._http.get('/tasks/:id');
    tempObservable.subscribe(data => console.log("got the Task!", data));
  }
  createTask(){
    let tempObservable = this._http.get('/tasks/new');
    tempObservable.subscribe(data => console.log('Creating new task', data));
  }
  editTask(){
    let tempObservable = this._http.get('/tasks/edit/:id');
    tempObservable.subscribe(data => console.log('Editing task', data))
  }
  deleteTask(){
    let tempObservable = this._http.get('/tasks/destroy/:id');
    tempObservable.subscribe(data => console.log('Deleting this task', data))
  }
}

