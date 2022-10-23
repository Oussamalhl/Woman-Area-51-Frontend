import {Complaint} from "./complaint";
import {Filecomplaint} from "./filecomplaint";
export class Attachment {
  idAttachment!:number;
  url!:string;
  complaint!:Complaint ;
  files!:Filecomplaint;


}
