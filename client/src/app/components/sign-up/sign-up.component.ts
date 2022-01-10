import { Component } from '@angular/core';
import {ISignUpData} from "../../shared/interfaces/user_model.interface";



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {


  signUpData: ISignUpData = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_password: '',
    stack_id: Math.random(),
    level_id: Math.random(),
  }

  signUp() {
    console.log('data from sign_Up', this.signUpData);
  }


}
