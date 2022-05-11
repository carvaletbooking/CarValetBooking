import { Component, OnInit, OnDestroy } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { collection, collectionData, query, where, Firestore, Timestamp, orderBy } from '@angular/fire/firestore';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Job, ValetTypes } from '../app.model';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public completed: boolean;
  public availableValets: string[];
  public selectedValets: string[];
  public jobs: Job[];
  public subscription: Subscription | null;

  displayedColumns: string[] = ['edit', 'company', 'model', 'regno', 'type', 'reqdate', 'valet', 'createdby', 'createdon', 'comment'];

  constructor(
    private auth: Auth,
    private router: Router,
    private dialog: MatDialog,
    private firestore: Firestore) {
      this.completed = false;
      this.availableValets = ValetTypes;
      this.selectedValets = this.availableValets;     
      this.jobs = [];
      this.subscription = null;
  }

  ngOnInit(): void {
    this.getJobs(); 
  }

  getJobs(){
    this.subscription?.unsubscribe();
    
    this.subscription = collectionData(
      query(
        collection(this.firestore, 'jobs'), 
        where('valet', 'in', this.selectedValets),
        where('completed', '==', this.completed),
        orderBy('reqdate'),
        orderBy('reqtime')),
      { idField: 'id' })
      .subscribe((data)=>{
        this.jobs = data as Job[];
      });
  }

  add() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'New Job'
    };

    this.dialog.open(JobComponent, dialogConfig);
  }

  edit(job: Job) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = job;

    this.dialog.open(JobComponent, dialogConfig);
  }

  logout(){
    signOut(this.auth)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => alert(e.message));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
