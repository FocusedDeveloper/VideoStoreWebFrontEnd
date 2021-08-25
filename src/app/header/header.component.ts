import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: AuthenticationService) { }

  name:String = "";

  ngOnInit() {
    this.name = sessionStorage.getItem('username');
  }

}
