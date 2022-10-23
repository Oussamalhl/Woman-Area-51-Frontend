import {Role} from "./Role";

export class User {
  id !: number;
  firstName! : string;
  lastName !: number;
  username!:string;
  password!:string;
  passwordConfirm!:string;
  email!:string;
  address!:string;
  dateN!:Date;
  tel!:string;
  loginTime!:number;
  pointFidelite!:number;
  roles!:Role[];
  sexe!:string;
  etatAcc!:boolean;
  enabled!:boolean;
  signupDay!:Date;


}
