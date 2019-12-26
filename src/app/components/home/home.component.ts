import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public picurl = "http://www.baidu.com/img/bd_logo1.png?where=super";

  public list:any[] = [
    {
      title: "news1"
    },
    {
      title: "news2"
    },{
      title: "news3"
    }
  ];

  public flag: boolean=false;
  public status: number = 3;
  constructor() { }

  ngOnInit() {
  }

}
