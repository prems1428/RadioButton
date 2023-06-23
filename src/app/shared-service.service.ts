import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http:HttpClient) { }
 
  api = 'http://localhost:3000/data';


  get(){
    return this.http.get(this.api);
  }
  post(data:any){
    return this.http.post(this.api,data);
  }

  checkEmailExistence(email: string) {
    return this.http.get<{ exists: boolean }>(`${this.api}/check-Email?Email=${email}`);
  }

}
