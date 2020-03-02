import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Usuarios,ServiciosService} from '../../../Services/servicios.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  _userService:any={}

  constructor(private activatedroute:ActivatedRoute,private userService:ServiciosService) {
      this.activatedroute.params.subscribe( params=> {
      this._userService=this.userService.getUser(params['id'])
  })

   }

  ngOnInit() {
 
  }

}