import { Injectable } from "@angular/core";




@Injectable()
export class StatusService
{

    // VARIABLES
    header_footer_status = false;





    // FUNCTIONS
    constructor()
    {

    }

    set_header_footer_status( value : boolean ) : void
    {
        this.header_footer_status = value;
    }

    get_header_footer_status() : boolean
    {
        return this.header_footer_status;
    }


}