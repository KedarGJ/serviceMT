import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/std.interface';
import { StdService } from '../../services/std.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  getStdArray !: Array<Istd>
  constructor(
    private _stdService : StdService
  ) { }

  ngOnInit(): void {
    this.getStdArray = this._stdService.fetchAllstd()
  }

  onRemove(sId:string){
    let getConfirm = confirm('Are You Sure,You want to delete this Student data?');
    if(getConfirm){
      this._stdService.removeTodo(sId)
    }
    
  }

}
