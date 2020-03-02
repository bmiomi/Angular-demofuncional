import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-tarjetacomponet',
  templateUrl: './user-tarjetacomponet.component.html',
  styleUrls: ['./user-tarjetacomponet.component.css']
})
export class UserTarjetacomponetComponent implements OnInit {

  constructor(private route:Router) { }

  @Input() user:any={}

  @Input() index:number;

  ngOnInit() {
  
  }

  verUsuario(){
    this.route.navigate(['User',this.index])
   }

}