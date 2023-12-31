import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nom:any = sessionStorage.getItem("name")
  prenom:any = sessionStorage.getItem("lastName")

  constructor(public loginService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
