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
  taskToCreate = {
    title: '',
    description: '',
    completed: false
  }
  edit = {
    title: '',
    description: '',
    completed: false,
    _id: ""
  };
  editing = false;

  constructor(private _httpService: HttpService) {
  }
  ngOnInit(){ 
    console.log('hello');
 }

  getTasksFromService() {
    this.clicked = true;
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("got our Tasks!", data);
      // for(let x in data){
      //  this.tasks = data[x];
      // }
      this.tasks = data['data'];
      console.log(data['data']);
    })
  }



  getTaskFromService(id: any) {
    this.stats = true;
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log("got the Task!", data)
      console.log(data['data'])
      this.task = data['data'];
    })
  }

  createTaskFromService(task) {
    let tempObservable = this._httpService.createTask(task);
    tempObservable.subscribe(data => console.log('Creating new task', data));
    this.getTasksFromService();
  }

  onSubmit() {
    console.log("in onsubmit")
    console.log(this.taskToCreate);
    this.createTaskFromService(this.taskToCreate);
    this.createTaskFromService;
    this.taskToCreate.title = "";
    this.taskToCreate.description = "";
  }

  on_Submit() {
    console.log("in on _ submit")
    console.log(this.edit);
    this.editTask(this.edit._id, this.edit);
    this.editTask;
    this.edit.title = "";
    this.edit.description = "";
  }

  editTaskShow(id: any) {
    this.editing = true;
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log('Editing task', data);
      this.edit._id = data['data']['_id'];
      this.edit.title = data['data']['title'];
      this.edit.description = data['data']['description'];
      this.edit.completed = data['data']['completed'];
      console.log("*********************")
      console.log(this.edit);
    })
  }

  editTask(id: any, edit) {
    this.editing = false;
    let observable = this._httpService.editTask(id, edit);
    observable.subscribe(data => {
      console.log('Editing task babyy', data);
    })
    this.getTasksFromService();
  }

  delete(id: any) {
    let tempObservable = this._httpService.deleteTask(id);
    tempObservable.subscribe(data => {
      console.log('Deleting this task', data)
    })
    this.getTasksFromService();
  }
}