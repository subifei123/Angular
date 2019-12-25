import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  aa= "abcded";
  public username:any ={
    name: "zhangsan",
    age: 20
  }
  msg:any

  constructor() {
    this.msg = "gaibianshuxingdezhi"
   }

  ngOnInit() {
  }

}
