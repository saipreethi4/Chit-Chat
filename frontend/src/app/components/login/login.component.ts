import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    userName: '',
    password: '',
  };
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
  onLogin() {
    // console.log(this.loginData);
    this.loginService.login(this.loginData).subscribe(
      (res: any) => {
        this.router.navigate(['/chatpage']);
      },
      (err: any) => {
        console.log(err);
        alert(err.error.message);
      }
    );
  }
}
