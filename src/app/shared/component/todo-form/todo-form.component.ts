import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { Itodos } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
@ViewChild("todoForm") todoForm !: NgForm
  constructor(
    private _todoService: TodoServiceService,
    private _uuidService: UuidService
  ) { }

  ngOnInit(): void {
  }

  onTodoAdd(){
      if(this.todoForm.valid){
        let todo : Itodos= {...this.todoForm.value, todoId:this._uuidService.Uuid()};
        console.log(todo)
        this.todoForm.reset();
        this._todoService.createNewTodo(todo)
      }
  }

  onRemove(todoId:string){
    let getConfirm = confirm('');
    if(getConfirm){
      this._todoService.removeTodo(todoId)
    }
    
  }

}
