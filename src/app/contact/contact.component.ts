import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myMessage:any
  pattern="^[ a-zA-Z][a-zA-Z ]*$";
  constructor(private formbuilder:FormBuilder , private _snackBar: MatSnackBar) {
  this.myMessage=this.formbuilder.group({
    name:['',[Validators.required , Validators.pattern(this.pattern) , Validators.minLength(3)] ],
    email:['',[Validators.required , Validators.email] ],
    msg:['',[Validators.required , Validators.maxLength(1024) ]],
  })
   }

  ngOnInit(): void {
  }

send(){
  console.log(this.myMessage.value);
  // console.log(this.myMessage.get("name").value);
  // console.log(this.myMessage.get("email").value);
  // console.log(this.myMessage.get("msg").value);


}

}
