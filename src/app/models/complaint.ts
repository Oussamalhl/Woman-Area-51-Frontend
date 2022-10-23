import {User} from "./User";
import {Attachment} from "./attachment";

export class Complaint {
  idComplaint!:number;
  description!:string;
  complaintType!:string ;
  user!:User;
  attachments!:Attachment;


}
