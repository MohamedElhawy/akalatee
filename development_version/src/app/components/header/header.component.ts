import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from 'src/app/services/status.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor( public statusS : StatusService , private userS : UserService , private router : Router ) { }

  ngOnInit(): void 
  {

  }

  sign_out()
  {
    // SIGNING OUT STATUS
    this.userS.set_signed_in(false);

    // REDIRECT TO SIGN IN AGAIN
    this.router.navigate(["/sign-in"]);

  }








}
