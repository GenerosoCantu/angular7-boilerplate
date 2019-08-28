import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  user: User = {
    id: null,
    name: '',
    email: '',
    dob: '',
    company: ''
  };
  maxDate;

  constructor(
    private router: Router,
    private userService: UserService) {
    this.userService.getUser(1).subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    this.userService.saveUser(this.user).subscribe(() => {
      this.router.navigate(['/page2']);
    });
  }

}
