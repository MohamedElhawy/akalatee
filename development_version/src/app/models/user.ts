


export class User
{
    email: string;
    password: string;
    id: string;


    constructor( email : string , password: string )
    {
        this.email = email;
        this.password = password;

        this.id = "" + Date.now() + Math.floor(Math.random() * 999);

    }

    
}