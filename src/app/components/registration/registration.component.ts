import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { UserDTO } from 'src/app/model/dto/user-dto';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertDTO } from 'src/app/model/util/alert-dto';
import { AlertType } from 'src/app/model/util/alert-type.enum';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,
              private service: UserService,
              private alertService: AlertsService) { }

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
        (err: HttpErrorResponse) => {
          this.submitted = false;
          const alert = new AlertDTO();
          alert.type = AlertType.ERROR;
          alert.title = 'Error while Registering';
          alert.messages.push('StatusText: ' + err.statusText);
          alert.messages.push(JSON.stringify(err));

          this.alertService.addAlertDTO(alert);
          console.error(alert.title, err);
        });
  }

}
