import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  // localhost:9090/api/v1/auth/login

  url = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  // calling the server to generate token
  generateToken(credentials: any) {
    // token generate

    return this.http.post(`${this.url}/generate-token`, credentials)
  }







  // set login user

  loginUser(token: string) {
    localStorage.setItem("token", token)
  }

  // to check user is loggedIn
  isLoggedIn() {
    let token = localStorage.getItem("token");

    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  // logout user
  logout() {
    localStorage.removeItem('token')
  }

  // getToken
  getToken() {
    return localStorage.getItem("token")
  }

}
