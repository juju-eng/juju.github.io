import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  signIn(username, password) {    
    return Auth.signIn(username, password);
  }

  //getCurrentUser() {
  //  return Auth.currentAuthenticatedUser();
  //}
}
