import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../contracts/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private http: HttpClient) { }

  GetUsers():Observable<IUser[]>{
      return this.http.get<IUser[]>('http://127.0.0.1:8080/getusers');
  }

  PostUser(user:IUser):Observable<IUser>{
    return this.http.post<IUser>('http://127.0.0.1:8080/registeruser',user);
  }

}
