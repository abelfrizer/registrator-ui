import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserDTO } from 'src/app/model/dto/user-dto';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  dto: UserDTO;
  userKey: string;
  userNotFound = true;

  constructor(private route: ActivatedRoute, private service: UserService, private alertService: AlertsService) {
    this.route.params.subscribe(params => this.userKey = params.userKey);
  }

  ngOnInit(): void {
    this.service.findByUserKey(this.userKey)
      .subscribe(res => this.dto = res.body, err => {
        console.error('Failed to retrieve user, via key [\'' + this.userKey + '\']');
      });
  }

}
