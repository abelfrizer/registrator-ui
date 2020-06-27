import { Component, OnInit } from '@angular/core';
import { UserSearchDTO } from 'src/app/model/dto/user-search-dto';
import { UserDTO } from 'src/app/model/dto/user-dto';
import { UserService } from 'src/app/services/user.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { AlertType } from 'src/app/model/util/alert-type.enum';
import { AlertDTO } from 'src/app/model/util/alert-dto';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  constructor(private service: UserService, private alertService: AlertsService) { }

  dto: UserSearchDTO;
  users: UserDTO[] = new Array();

  tableColumns: string[] = ['firstName', 'surname', 'telephone', 'identity', 'dateCreated'];

  ngOnInit(): void {
    this.initPage();
  }

  onUserSearch() {
    this.service.search(this.dto)
      .subscribe(res => {
        this.users = res.body;
      }, err => { });
  }

  onResultsReset() {
    this.initPage();
  }

  private initPage() {
    // clear an array
    this.users = [];
    this.dto = new UserSearchDTO();
    this.service.findAll()
      .subscribe(res => {
        this.users = res.body;
      },
        (err: HttpErrorResponse) => {
          const alert = new AlertDTO();
          alert.type = AlertType.ERROR;
          alert.title = 'Failed to search users';
          alert.messages.push('StatusText: ' + err.statusText);

          this.alertService.addAlertDTO(alert);
          console.error(alert.title);
        });
  }

}
