import {Injectable} from '@angular/core';
/*
import {HttpClient} from '@angular/common/http';

import {Auth} from '../type/auth.type';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth, User} from 'firebase/app';

import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
*/

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  /*
  firebaseUser: User;

  constructor(private http: HttpClient, private afAuth: AngularFireAuth, private route: Router) {
  }

  get authenticated(): boolean {
    return this.afAuth.auth.currentUser !== null;
  }

  async login(userAuth: Auth) {
    await this.afAuth.auth.signInWithEmailAndPassword(userAuth.email, userAuth.password);
    await this.http.post(environment.host + 'auth/login', {id: this.afAuth.auth.currentUser.uid}).toPromise();
    this.firebaseUser = this.afAuth.auth.currentUser;
    console.log('You have been successfully logged in!');
    //todo: admin -> neue Seite
    await this.route.navigate(['candy-shop']);
  }

  googleAuth() {
    return this.loginWithSocial(new auth.GoogleAuthProvider());
  }

  facebookAuth() {
    return this.loginWithSocial(new auth.FacebookAuthProvider());
  }

  twitterAuth() {
    return this.loginWithSocial(new auth.TwitterAuthProvider());
  }

  async loginWithSocial(provider) {
    try {
      await this.afAuth.auth.signInWithPopup(provider);
      console.log('You have been successfully logged in!');
    } catch (e) {
      console.log('Failed to log in.');
    }
  }

  async register(userAuthDto: Auth) {
    await this.afAuth.auth.createUserWithEmailAndPassword(userAuthDto.email, userAuthDto.password);
    await this.registerUser(this.afAuth.auth.currentUser.uid);
  }

  async registerUser(id: string): Promise<void> {
    await this.http.post(environment.host + 'auth/register', {id}).toPromise();
  }
  */
}
