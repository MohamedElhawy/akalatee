import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { StatusService } from 'src/app/services/status.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // VARIABLES
  sign_up_form : FormGroup;
  alert_message: boolean = false;



  // FUNCTIONS 
  constructor( private statusS : StatusService , private fb : FormBuilder , private userS : UserService ) 
  { 

  }

  ngOnInit(): void 
  {
    // SET THE STATUS DISPLAY OF HEADER AND FOOTER
    this.statusS.set_header_footer_status(false);

    // CONFIGURE THE FORM
    this.sign_up_form = this.fb.group({
      email: [ "" , [Validators.required , Validators.email] ],
      password: [ "" , [Validators.required , Validators.minLength(6)] ]
    });


  }


  sign_up()
  {

    console.log("sign up");
    // console.log(this.sign_up_form.value.email ,this.sign_up_form.value.password );

    // // CREATE USER
    let user  = new User(this.sign_up_form.value.email ,this.sign_up_form.value.password);


    // // SAVE USER TO LOCAL STORAGE
    this.userS.sign_up( user );

    // CLEAN FORM
    this.sign_up_form.reset();

    // SHOW ALERT MESSAGE
    this.alert_message = true;

    setTimeout( ()=>{ this.alert_message = false; } , 2000 );


  }



  
}
