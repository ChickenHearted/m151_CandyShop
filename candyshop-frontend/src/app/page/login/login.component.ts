import {Component, OnInit} from '@angular/core';
/*
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
*/
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  email: string;
  password: string;
  invalidEmail: boolean;
  invalidPassword: boolean;
  noUserFound: boolean;
  remember: boolean;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    await this.navigateToCandyShop();
    await this.loadLoginData();
  }

  async login() {
    try {
      await this.authService.login({email: this.email, password: this.password, admin: this.isAdmin});
    } catch (e) {
      (e.toString().includes('email')) ? this.invalidEmail = true : this.invalidEmail = false;
      (e.toString().includes('password')) ? this.invalidPassword = true : this.invalidPassword = false;
      (e.toString().includes('user')) ? this.noUserFound = true : this.noUserFound = false;
    }
    if (this.remember) {
      localStorage.setItem('EMAIL', this.email);
      localStorage.setItem('PASSWORD', this.password);
      localStorage.setItem('REMEMBER', 'true');
    }
  }

  async loginWithGoogle() {
    await this.authService.googleAuth();
    this.navigateToCandyShop();
  }

  async loginWithFacebook() {
    await this.authService.facebookAuth();
    this.navigateToCandyShop();
  }

  async loginWithTwitter() {
    await this.authService.twitterAuth();
    this.navigateToCandyShop();
  }

  private async navigateToCandyShop() {
    await this.router.navigate(['candy-shop']);
  }

  private async loadLoginData() {
    const email = localStorage.getItem('EMAIL');
    const pw = localStorage.getItem('PASSWORD');
    const remember = localStorage.getItem('REMEMBER');
    if (remember === 'true') {
      if (email && pw) {
        this.email = email;
        this.password = pw;
        this.remember = true;
        await this.login();
      }
    }
  }
   */
}
