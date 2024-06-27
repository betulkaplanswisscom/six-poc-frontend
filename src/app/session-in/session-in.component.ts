import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Component({
  selector: 'app-session-in',
  standalone: true,
  templateUrl: './session-in.component.html',
  styleUrls: ['./session-in.component.css'],
})
export class SessionInComponent implements OnInit {
  lastAccessDate: string = '';
  sessionMessage = 'This is session message';

  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit() {
    this.checkSession();
  }

  checkSession() {
    this.sessionService.checkSession().subscribe(
      (data: any) => {
        if (!data.hasSession) {
          this.router.navigate(['/login']);
        } else {
          this.lastAccessDate = data.lastAccessDate;
        }
      },
      (error) => {
        console.error('Error checking session:', error);
        this.router.navigate(['/login']);
      }
    );
  }

  onAccept() {
    this.sessionService.acceptSession().subscribe(
      () => {
        this.router.navigate(['/default']);
      },
      (error) => {
        console.error('Error accepting session:', error);
      }
    );
  }

  onReturn() {
    this.sessionService.returnSession().subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error returning from session:', error);
      }
    );
  }
}
