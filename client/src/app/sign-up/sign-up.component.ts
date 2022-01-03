import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpUserData = { }
  constructor(
    public email: string,
    public password: string

  ) { }

  ngOnInit(): void {
  }
  signUp(){
    console.log(this.signUpUserData)
  }
}
