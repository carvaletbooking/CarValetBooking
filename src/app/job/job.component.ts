import { Component, Inject, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collection, doc, addDoc, setDoc, Firestore, Timestamp } from '@angular/fire/firestore';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Job, CompanyNames, ValetTypes, CarTypes, TimeOptions, ProtectionKits } from '../app.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  public id: string;
  public company: string;
  public model: string;
  public regno: string;
  public reqdate: Date | undefined;
  public reqtime: string;
  public type: string;
  public protection: string;
  public valet: string;
  public completed: boolean;
  public createdon: Date | undefined;
  public createdby: string;
  public comment: string;

  public companyOptions: string[];
  public typeOptions: string[];
  public protectionKitOptions: string[];
  public valetOptions: string[];
  public timeOptions: string[];

  public title: string;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private dialogRef: MatDialogRef<JobComponent>,
    @Inject(MAT_DIALOG_DATA) job: Job) { 
      this.title = job.id ? 'Edit Job' : 'New Job';
      this.companyOptions = CompanyNames;
      this.typeOptions = CarTypes;
      this.protectionKitOptions = ProtectionKits;
      this.valetOptions = ValetTypes;
      this.timeOptions = TimeOptions;
      
      this.id = job.id;
      this.company = job.company;
      this.model = job.model;
      this.regno = job.regno;
      this.reqdate = job.reqdate?.toDate(),
      this.reqtime = job.reqtime;
      this.type = job.type;
      this.protection = job.protection;
      this.valet = job.valet;
      this.completed = job.completed === true;
      this.createdon = job.createdon?.toDate();
      this.createdby = job.createdby;
      this.comment = job.comment;      
  }

  ngOnInit(): void {
  }

  save() {
    const job = {
      company: this.company,
      model: this.model,
      regno: this.regno,
      reqdate: this.reqdate,
      reqtime: this.reqtime,
      type: this.type,
      protection: this.protection,
      valet: this.valet,
      completed: this.completed,
      createdon: this.createdon ?? new Date(),
      createdby: this.createdby ?? this.auth.currentUser?.email,
      comment: this.comment ?? ''
    }

    if (this.id) {
      setDoc(doc(this.firestore, `jobs/${this.id}`), job)
        .then(() => this.dialogRef.close());
    }
    else {
      addDoc(collection(this.firestore, 'jobs'), job)
        .then(() => this.dialogRef.close());
    }
  }

  close() {
    this.dialogRef.close();
  }

}
