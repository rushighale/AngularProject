import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log("form submitted")

    if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != '' && this.credentials.password != null)) {


      this.loginService.generateToken(this.credentials).subscribe((response: any) => {

        console.log(response.token)
        this.loginService.loginUser(response.token)
        window.location.href='/dashboard'
      },
        error => {
          console.log(error);
        })

    } else {
      console.log("Fields are empty")
    }
  }

}
