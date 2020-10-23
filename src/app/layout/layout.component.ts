import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  user: any;

  ngOnInit(): void {
    if('user' in sessionStorage){
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }else this.router.navigate(["/login"]);
  }

}
