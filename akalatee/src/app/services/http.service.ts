import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService 
{

  constructor( private http : HttpClient ) 
  { 

  }


  get_data()
  {

    return new Promise( (resolve , reject)=>{


      this.http.get("http://satafood.codesroots.com:3000/api/branches//homepage").subscribe(
        (data)=>{ resolve(data); },
        (err)=>{ reject(err); }
      );

    });


  }





}
