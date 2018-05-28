import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../service/department.service';
import { Department} from './department';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent implements OnInit {
  todos: Department[];
  title = 'app works!';

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit() {
    this.todos = [];
      this.departmentService.getAllTodo().subscribe((taskList) => {
        this.todos =taskList;
        console.log(this.todos);
      });
   /* this.departmentService.getAllTodo().subscribe((todos) => {
      console.log('hello world');
      this.todos = todos;
    });*/
  }
}

