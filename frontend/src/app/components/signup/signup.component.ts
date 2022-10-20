import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errormsg = '';
  err = '';
  signupData = {
    userName: '',
    email: '',
    password: '',
    phoneNum: '',
  };

  constructor(private router: Router, private signupService: SignupService) {}

  ngOnInit(): void {}
  onSignup() {
    console.log(this.signupData);
    this.signupService.signup(this.signupData).subscribe(
      (d) => {
        console.log(d);
        alert('Signup Successfull');
        this.router.navigate(['/']);
      },
      (error) => {
        this.err = error.statusText;
        console.log(this.err);
        this.errormsg = 'User Name Already taken';
        const element = document.createElement('div');
        element.innerHTML = this.errormsg;
        element.style.color = 'red';
        document.getElementById('userError')?.append(element);
        alert(this.errormsg + ' ,' + 'Try with different User Name');
      }
    );
  }
}
