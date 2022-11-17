import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = environment.whatsbaseurl;
  secret = environment.secret;
  constructor(private http: HttpClient) { }


  postRequest(): Observable<any>{
    return this.http.post(`${this.baseurl}/session-teste0101/${this.secret}/generate-token`, null);
  }

  startSession(): Observable<any>{
    return this.http.post(`${this.baseurl}/session-teste0101/start-session`, null);
  }


}
