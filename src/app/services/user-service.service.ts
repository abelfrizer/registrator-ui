import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../dto/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user = new UserDTO();
  users: UserDTO[] = [];

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.users;
  }

  createUser(dto: UserDTO): string {
    return 'userKey';
  }

  // getUser(uuid: string): UserDTO {
  //   return this.httpClient.get();
  // }
}
