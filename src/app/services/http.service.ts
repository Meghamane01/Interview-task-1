import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User{
  id:number,
  firstName:string,
  lastName:string,
  maidenName:string,
  age:number,
  gender:string,
  email:any,
  phone: number,
username: any,
password: any,
birthDate:number,
image:any,
bloodGroup:any,
height:number,
weight: number,
eyeColor:number,
hair:object,
domain: any,
ip: number,
address:object,
postalCode:number,
state:string,
macAddress: number,
university: string,
bank:object,
company: object
ein: number,
ssn: number,
userAgent: any
}
export interface Userdata{
  limit:number,
  skip:number,
  total:number,
  users:User
  }

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  get:any;
  
  constructor(private http: HttpClient) { }
   url="https://dummyjson.com/users"
 
  GetTodos():Observable<Userdata>{
    return this.http.get<Userdata>(this.url)
  }
}


