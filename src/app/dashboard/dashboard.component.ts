import { Component, OnInit } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { collection, collectionData, query, where, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Job, ValetTypes } from '../app.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public availableValets: string[];
  public selectedValets: string[];
  public readonly jobs$: Observable<Job[]>;

  constructor(
    private auth: Auth,
    private router: Router,
    firestore: Firestore
    ) {
      this.availableValets = Object.values(ValetTypes);
      this.selectedValets = this.availableValets;

      this.jobs$ = collectionData(
        query(
          collection(firestore, 'jobs'), 
          where('valet', 'in', this.selectedValets)),
          { idField: 'id' }) as Observable<Job[]>;
    }

  ngOnInit(): void {
  }

  logout(){
    signOut(this.auth)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => alert(e.message));
  }
}
