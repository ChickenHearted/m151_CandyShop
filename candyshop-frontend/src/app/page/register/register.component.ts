import {Component, OnInit} from '@angular/core';
/*
import {Router} from '@angular/router';
import {AuthService} from "../../service/auth.service";
*/
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {


  constructor() { }

  ngOnInit(): void {
  }

  /*
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  passwordNotIdentical: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  async register() {
    try {
      this.invalidEmail = false;
      this.invalidPassword = false;
      if (this.email.trim() === '') {
        this.invalidEmail = true;
      }
      if (this.password !== this.repeatPassword) {
        this.password = '';
        this.repeatPassword = '';
        this.passwordNotIdentical = true;
      }
      await this.authService.register({email: this.email, password: this.password, admin: this.isAdmin});
      await this.router.navigate(['home']);
    } catch (e) {
      (e.toString().includes('email')) ? this.invalidEmail = true : this.invalidEmail = false;
      (e.toString().toLocaleLowerCase().includes('password')) ? this.invalidPassword = true : this.invalidPassword = false;
    }
  }
   */
}
