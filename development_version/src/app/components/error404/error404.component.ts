import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor( private statusS : StatusService) { }

  ngOnInit(): void 
  {
    // SET HEADER AND FOOTER DISPLAY
    this.statusS.set_header_footer_status(false);


  }


}
