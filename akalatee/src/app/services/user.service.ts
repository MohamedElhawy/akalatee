import { Injectable, OnInit } from "@angular/core";
import { User } from "../models/user";



@Injectable()
export class UserService implements OnInit
{

    // VARIABLES
    signed_in : boolean = false;






    // FUNCTIONS
    ngOnInit(): void 
    {
        // CREATING ARRAY FOR USERS IN LOCAL STORAGE
        localStorage.setItem("users" , JSON.stringify([]) ); 
    }


    sign_up( user : User )
    {

        // GET USERS LIST FROM THE LOCAL STORAGE 
        let usersList = localStorage.getItem("users");

        if ( usersList )
        {

            let userList_obj = JSON.parse(usersList);

            console.log("data from local storage after become obj : " , userList_obj);

            userList_obj.push( user );

            // STORE TO LOCAL STORAGE
            localStorage.setItem("users" , JSON.stringify(userList_obj) );

        }
        else
        {
            localStorage.setItem("users" , JSON.stringify([]) );
        }


    }



    sign_in( user : any ) : string
    {

        // GET USERS LIST FROM THE LOCAL STORAGE 
        let usersList = localStorage.getItem("users");

        if ( usersList )
        {

            let userList_obj = JSON.parse(usersList);

            console.log("data from local storage after become obj : " , userList_obj);

            for ( let user_obj of userList_obj )
            {
                if( user_obj.email == user.email )
                {

                    if( user_obj.password == user.password )
                    {
                        this.set_signed_in(true);
                        return "200";
                    }
                    else
                    {
                        return "incorrect password!"
                    }

                }


            }

            return "user not found!"


        }
        else
        {
            return "Please Sign up first!";
        }


    }


    set_signed_in(value : boolean)
    {
        localStorage.setItem("akalatee_signed_in" , JSON.stringify(value));
    }

    get_signed_in() : boolean
    {
        let value = localStorage.getItem("akalatee_signed_in");

        if( value )
        {
            return JSON.parse(value);
        }
        else
        {
            return false;
        }
    }





}