import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export  class UsersService {

   signUpUserData = {
     firstname:'',
     lastname:'',
     email: '',
     password: ''
   }

  signUp(){
console.log(this.signUpUserData)
  }
}
