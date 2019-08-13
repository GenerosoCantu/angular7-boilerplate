import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  maxDate;

  constructor() {
  }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    // this.authService.registerUser({
    //   email: form.value.email,
    //   password: form.value.password
    // });
  }

}
