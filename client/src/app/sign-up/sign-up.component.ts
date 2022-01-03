import { Component, OnInit } from '@angular/core';
import { UsersService} from "../shared/users.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }

}
