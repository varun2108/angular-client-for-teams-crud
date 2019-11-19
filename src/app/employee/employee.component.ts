import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  team;


  constructor(
    private clent: HttpClient, private ds: DataService, private router: Router
  ) { }

  ngOnInit() {

     console.log("here");
     this.team=this.ds.team;
     console.log(this.ds.team);
  }

  editteam() {
    this.clent.put("http://localhost:8086/updateteam",this.team,{observe: 'response'}).subscribe(resp=>{
      if(resp.status==200)
        {
          console.log(resp.status)
          this.router.navigate(['home'])
    }
  })


  }
}
