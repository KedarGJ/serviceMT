import { Component, OnInit, ViewChild } from '@angular/core';
import { StdService } from '../../services/std.service';
import { UuidService } from '../../services/uuid.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
@ViewChild('stdform') stdform !: NgForm
  constructor(
    private _stdService: StdService,
    private _uuidService: UuidService
  ) { }

  ngOnInit(): void {
  }

  onstdAdd(){
    if(this.stdform.valid){
      let stdobj={...this.stdform.value, sId:this._uuidService.Uuid()}
      console.log(stdobj);
      this.stdform.reset()
      this._stdService.createNewStd(stdobj)
    }
  }

}
