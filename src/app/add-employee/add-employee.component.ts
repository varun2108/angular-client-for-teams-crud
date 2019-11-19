import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  team = {
    id : 0,
    name : ''
  }

  constructor(private router: Router,
    private client:HttpClient
  ) { }

  ngOnInit() {
  }

  createteam(): void {
    const myObjStr = JSON.stringify(this.team);
    console.log(this.team)
    this.client.post("http://localhost:8086/addteam",this.team).subscribe(data=>{this.router.navigate(['home'])})
    console.log(myObjStr)
  };

}
