import { Component, OnInit } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public readonly jobs$: Observable<any>;

  constructor(
    private auth: Auth,
    private router: Router,
    firestore: Firestore
    ) {
      const ref = collection(firestore, 'jobs');
      this.jobs$ = collectionData(ref);
    }

  ngOnInit(): void {
  }

  logout(){
    signOut(this.auth)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => alert(e.message));
  }
}
