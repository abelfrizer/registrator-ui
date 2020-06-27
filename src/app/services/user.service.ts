import { Injectable } from '@angular/core';
import { UserDTO } from 'src/app/model/dto/user-dto';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  public findByUserKey(userKey: string): Observable<HttpResponse<UserDTO>> {
    const serviceUrl = this.getServiceURL('/' + userKey);
    return this.http.get<UserDTO>(serviceUrl, {
      headers: this.getHeaders(),
      observe: 'response'
    });
  }

  public search(): Observable<HttpResponse<UserDTO[]>> {
    const serviceUrl = this.getServiceURL('/');
    return this.http.get<UserDTO[]>(serviceUrl, {
      headers: this.getHeaders(),
      observe: 'response'
    });
  }

  public findAll(): Observable<HttpResponse<UserDTO[]>> {
    const serviceUrl = this.getServiceURL('/');
    return this.http.get<UserDTO[]>(serviceUrl, {
      headers: this.getHeaders(),
      observe: 'response'
    });
  }

  public create(dto: UserDTO): Observable<HttpResponse<UserDTO>> {
    const serviceUrl = this.getServiceURL('/');
    return this.http.post<UserDTO>(serviceUrl, dto, {
      headers: this.getHeaders(),
      observe: 'response'
    });
  }

  private getHeaders(): HttpHeaders {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    return httpHeaders;
  }

  private getServiceURL(servicePath: string): string {
    return (this.baseUrl + servicePath);
  }

}
