import { Component, ViewChild } from '@angular/core';
import { HttpService, Userdata } from './services/http.service';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interview-task';
  users:any;
  data:Userdata | any;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'maidenName','age','gender','email','phone','username'
,'password','birthDate','bloodGroup','height','weight','eyeColor','domain','state'];

  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  dataSource: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private userdata: HttpService) {
  
    this.userdata.GetTodos().subscribe(x=>{
      this.data = x;
      console.log(this.data);
      
    })
  }
}
