import { Injectable } from '@angular/core';
import { UserDTO } from 'src/app/model/dto/user-dto';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserDAO } from '../model/dao/user-dao';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dao: UserDAO;

  user = new UserDTO();
  users: UserDTO[] = [];

  constructor(private httpClient: HttpClient) {
    this.dao = new UserDAO(this.httpClient, 'http://localhost:8080/users');
  }

  createNewUser(dto: UserDTO) {
    this.dao.create(dto).subscribe(
      resp => {
        console.log("SuccessResp: " + JSON.stringify(resp));
      },
      (err: HttpErrorResponse) => {
        console.log("ErrorResp: " + JSON.stringify(err));
      }
    );
  }

}
