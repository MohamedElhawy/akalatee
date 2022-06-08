import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { StatusService } from 'src/app/services/status.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // VARIABLES
  slider_images : any[] = [];
  new_offers : any[] = [];
  category_list : any[] = [];

  // testing
  test_var : boolean = true;
  show_header_footer_status_home : boolean = this.statusS.get_header_footer_status();



  // FUNCTIONS
  constructor( private statusS : StatusService , private httpS : HttpService , private userS : UserService , private router : Router) 
  { 

  }

  ngOnInit(): void 
  {

    // CHECK IF THE USER IS SIGNED IN
    if( !this.userS.get_signed_in() )
    {
      this.router.navigate(["/sign-in"]);
    }


    // SET HEADER AND FOOTER DISPLAY
    this.statusS.set_header_footer_status(true);

    // LOAD API DATA AND POPULATE PAGE
    this.httpS.get_data()
    .then((data : any)=>{

      // SEE DATA
      // console.log(data.sliders);
      // console.log(data.newoffers);
      // console.log(data.categories);

      // POPULATE SLIDER WITH IMAGES
      this.slider_images = data.sliders;

      // POPULATE SLIDER WITH IMAGES
      this.new_offers = data.newoffers;

      // POPULATE CATEGORIES WITH IMAGES
      this.category_list = data.categories;


    })
    .catch((err)=>{
      console.log(err);
    });



  }



  // testing function
  test_slider_img_exist()
  {
    
    if ( this.slider_images.length )
    { 
      return true;
    }
    else
    {
      return false;
    }


  }



  

}
