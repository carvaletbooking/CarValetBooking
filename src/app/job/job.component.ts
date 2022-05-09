import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Job, CompanyNames, ValetTypes, CarTypes, TimeOptions } from '../app.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  public companyOptions: string[];
  public typeOptions: string[];
  public valetOptions: string[];
  public timeOptions: string[];

  public title = '';
  public job: Job = {
    id: '',
    company: '',
    model: '',
    regno: '',
    reqdate: '',
    reqtime: '',
    type: '',
    valet: '',
    completed: false,
    createdon: '',
    createdby: '',
    comment: ''
  };

  constructor(
    private dialogRef: MatDialogRef<JobComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) { 
      this.title = data.title;
      this.companyOptions = CompanyNames;
      this.typeOptions = CarTypes;
      this.valetOptions = ValetTypes;
      this.timeOptions = TimeOptions;
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
