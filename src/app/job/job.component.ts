import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  title = '';

  constructor(
    private dialogRef: MatDialogRef<JobComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) { 
      this.title = data.title;
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
