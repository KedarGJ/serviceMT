import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../models/todo.interface';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todosArr !: Array<Itodos>
  constructor(
    private _todoService: TodoServiceService
  ) { }

  ngOnInit(): void {
    this.todosArr = this._todoService.fetchAllTodos()
  }

  onRemove(todoId:string){
    let getConfirm = confirm('Are You Sure,You want to delete this TodoItem?');
    if(getConfirm){
      this._todoService.removeTodo(todoId)
    }
    
  }

}
