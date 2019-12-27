import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public peopleInfo:any = {
    username: "",
    sex: "1",
    city_list: ['北京','上海', '深圳'],
    city: '北京',
    hobby: [{
      title: "吃饭",
      checked: false
    },{
      title: "睡觉",
      checked: false
    },{
      title: "游戏",
      checked: false
    }],
    mark: ""
  }

  constructor() { }

  ngOnInit() {
  }

  doSubmit(){
    console.log(this.peopleInfo);
  }
}
 