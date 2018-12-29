import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-user',
  templateUrl : 'user.html'
})
export class UserPage{
  name : string;
  constructor(private navParams : NavParams){
    // We could have initialize the name var here in the constructor just as we did on ngOnInit()
    // this.name = this.navParams.data;
  }
  ngOnInit(){
    this.name = this.navParams.data;
  }
}
