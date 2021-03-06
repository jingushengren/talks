import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserInfo } from '../models/user-info.model';
import { UserIndexService } from '../services/user-index.service';

@Component({
  selector: 'user-app',
  templateUrl: 'template/user.html',
  styleUrls: ['css/user.css'],
})
export class UserComponent implements OnInit {
  user : UserInfo = new UserInfo();
  error: string = '';
  constructor( private userIndexservice : UserIndexService ,
               private route : ActivatedRoute ,
               private location : Location ){
  }
  ngOnInit():void{
    this.route.params
              .subscribe(params=>this.userIndexservice.getUserInfo(params['uid'])
              .then(user=>this.user=user,error=>this.error=error));
  }
  goBack(){
    this.location.back();
  }
}