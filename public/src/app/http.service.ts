import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
  }
  getTasks(){
    return this._http.get('/tasks');
  }
  getTask(id: any){
    return this._http.get(`/tasks/${id}`);
  }
  createTask(task){
    return this._http.post('/tasks/new',task);
  }
  editTask(id: any, task){
    return this._http.put(`/tasks/edit/${id}`, task)
  }
  deleteTask(id: any){
    return this._http.delete(`/tasks/destroy/${id}`)
  }
}
