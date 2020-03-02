import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  constructor(private route:Router){

  }

  ngOnInit() {
  }

  navigate(){
      this.route.navigateByUrl('/about')
  }

}