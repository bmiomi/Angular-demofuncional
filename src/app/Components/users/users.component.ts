import { Component, OnInit } from '@angular/core';
import {Usuarios,ServiciosService} from '../../../Services/servicios.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

 _Users:Usuarios[]=[]

  constructor(private userservice:ServiciosService,
              private route:Router){
              }

  ngOnInit(){
    this._Users=this.userservice.getUsers()
    }
  

}