import {User} from "./User";
export class Expertinterview {
  idExpertInterview!:number;
  expertField!:string;
  dateExpertInterview!:Date;
  interviewType!:boolean;
  rating!:number;
  expert !:User;
  user!:User;
  done!:boolean;
  ratingText!:string;
}
