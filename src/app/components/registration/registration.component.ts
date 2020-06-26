import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserDTO } from 'src/app/dto/user-dto';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  dto: UserDTO;
  submitted = false;
  errors: string[];

  ngOnInit(): void {
    this.dto = new UserDTO();
  }

  onRegFormSubmit(): void {
    console.log("Form data: "+ JSON.stringify(this.dto));
    this.submitted = true;
  }

}
