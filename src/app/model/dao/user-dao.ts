import { UserDTO } from '../dto/user-dto';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class UserDAO {

    constructor(private http: HttpClient, private baseUrl: string) { }

    public create(dto: UserDTO): Observable<HttpResponse<UserDTO>> {
        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        const options = {
            headers: httpHeaders,
            observe: 'response'
        };
        const serviceUrl = this.getServiceURL('/');

        return this.http.post<UserDTO>(serviceUrl, dto, {
            headers: httpHeaders,
            observe: 'response'
        });
    }

    private getServiceURL(servicePath: string): string {
        return (this.baseUrl + servicePath);
    }
}
