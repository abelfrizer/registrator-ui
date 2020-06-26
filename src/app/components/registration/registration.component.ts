import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserDTO } from 'src/app/dto/user-dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: UserService) { }

  dto: UserDTO;
  submitted = false;
  errors: string[] = new Array();

  ngOnInit(): void {
    this.dto = new UserDTO();
  }

  onRegFormSubmit(): void {
    let newUuid = '';
    this.service.createNewUser(this.dto)
      .subscribe(dto => {
        newUuid = dto.uuid;
        this.submitted = true;
        //TODO: maybe redirect to view page
      });
  }

}
