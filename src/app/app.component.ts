import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SessionInComponent } from './session-in/session-in.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SessionInComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'six-ai-frontend';
}
