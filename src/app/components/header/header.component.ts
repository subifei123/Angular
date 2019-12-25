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

  public userlist:any[] = [{
    user:"张三",
    age: 20
  },
{
  user: "李四",
  age: 34
}]

public cars:any[] = [{
  car: "宝马",
  list:[
    {
      title: "宝马1",
      price: 30
    },
    {
      title: "宝妈2",
      price: 40
    }
  ]
},
{
  car: "奥迪",
  list:[{
    title: "奥迪1",
    price: 50
  },{
    title: "奥迪2",
    price: 60
  }]
}]


title = "<h1>插入一个HTML属性</h1>"

  constructor() {
    this.msg = "gaibianshuxingdezhi"
   }

  ngOnInit() {
  }

}
