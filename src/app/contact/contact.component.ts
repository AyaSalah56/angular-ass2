import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  inputNameValue: string = '';
  inputAgeValue: string = '';
  inputEmailValue: string = '';
  inputPasswordValue: string = '';
 
  showName: boolean = false;
  showAge: boolean = false;
  showEmail: boolean = false;
  showPassword: boolean = false;

  toggle() {
    if (this.inputNameValue.length > 0) 
    {
      this.showName = true;
    }
    else {
      this.showName = false;
    }


    if (this.inputAgeValue.length > 0) 
    {
      this.showAge = true;
    }
    else {
      this.showAge = false;
    }

    if(this.inputEmailValue.length > 0)
    {
      this.showEmail = true;
    }
    else
    {
      this.showEmail = false;
    }


    if(this.inputPasswordValue.length > 0)
    {
      this.showPassword = true;
    }
    else
    {
      this.showPassword = false;
    }
  }

}
