import { Router } from '@angular/router';
import { DataService } from './../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private tm;
  public val;
  constructor(private client:HttpClient,private Ds:DataService,public router: Router) { }
  teams: string [];
  ngOnInit() {
    this.client.get('http://localhost:8086/hello').subscribe(data=>{ this.teams = data as string []; console.log(data);},err=>{console.log(err);});
  }
  delete(team){
  let id = team.id;
  this.client.delete('http://localhost:8086/deleteteam/'+id).subscribe(data=>{this.router['home']});
  window.location.reload();
  }
  update(team){
    this.Ds.team=team;
    this.router.navigate(['/editteam']);
  }
}
