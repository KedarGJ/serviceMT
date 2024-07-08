import { Injectable } from '@angular/core';
import { Istd } from '../models/std.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StdService {
stdArray : Array<Istd>=[
  {
    fname:'Hari',
    lname:'Om',
    email:'ho@1345',
    contact:'123546789',
    sId:'12'
  },
  {
    fname:'Hari',
    lname:'Om',
    email:'ho@1345',
    contact:'123546789',
    sId:'13'
  },
  {
    fname:'Hari',
    lname:'Om',
    email:'ho@1345',
    contact:'123546789',
    sId:'13'
  },
]



  constructor(
    private _stdService : SnackbarService
  ) { }

  fetchAllstd():Istd[]{
    return this.stdArray
  }

  createNewStd(newStd:Istd){
    this.stdArray.push(newStd);
   this._stdService.openSnackBar('new Std Added')
  }

  removeTodo(id:string){
    let getIndex =this.stdArray.findIndex(std => std.sId === id)
    this.stdArray.splice(getIndex,1);
    this._stdService.openSnackBar('std deleted')
  }

}
