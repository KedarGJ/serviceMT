import { Injectable } from '@angular/core';
import { Itodos } from '../models/todo.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todoArray: Array<Itodos>=[
    {
      todoItem:'angular',
      todoId:'11'
    },
    {
      todoItem:'Html',
      todoId:'12'
    },
    {
      todoItem:'Js',
      todoId:'12'
    }
  ]
  constructor(
    private _snackBarService: SnackbarService
  ) { }
  
  fetchAllTodos():Itodos[]{
    return this.todoArray
  }

  createNewTodo(newTodoItem:Itodos){
    this.todoArray.push(newTodoItem);
    this._snackBarService.openSnackBar('Todo Item Added')
  }

  removeTodo(id:string){
    let getIndex =this.todoArray.findIndex(todo => todo.todoId === id)
    this.todoArray.splice(getIndex,1);
    this._snackBarService.openSnackBar('todo item deleted')
  }

}
