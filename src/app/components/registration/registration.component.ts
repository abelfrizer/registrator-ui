import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { UserDTO } from 'src/app/model/dto/user-dto';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,
              private service: UserService) { }

  dto: UserDTO;
  submitted = false;
  errors: string[] = new Array();

  ngOnInit(): void {
    this.dto = new UserDTO();
  }

  onRegFormSubmit(): void {
    this.submitted = true;
    this.service.create(this.dto)
      .subscribe(
        resp => {
          const userKey = resp.body.uuid;
          console.log('User created successfully');
          this.router.navigate(['/users/' + userKey]);
        },
        err => {
          this.submitted = false;
          console.error('Error while creating user: ' + err);
        });
  }

}
