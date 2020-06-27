import { UserDTO } from '../dto/user-dto';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class UserDAO {

    constructor(private http: HttpClient, private baseUrl: string) { }

    public findByUuid(uuid: string): Observable<HttpResponse<UserDTO>> {
        const serviceUrl = this.getServiceURL('/' + uuid);
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
