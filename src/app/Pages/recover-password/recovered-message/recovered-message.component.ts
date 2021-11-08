import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovered-message',
  templateUrl: './recovered-message.component.html',
  styleUrls: ['./recovered-message.component.scss'],
})
export class RecoveredMessageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/login');
  }
}
