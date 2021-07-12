import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface FormObject{
  label: string;
  name: string;
  value:any;
  type:string;
  placeHolder:string;
}

@Component({
  selector: 'app-daynic-from',
  templateUrl: './daynic-from.component.html',
  styleUrls: ['./daynic-from.component.scss']
})

export class DaynicFromComponent implements OnInit {
  @ViewChild('signupForm') signupForm: NgForm | undefined;
  formsObject: FormObject[] =[
    {
      label:'first name',
      name:'name',
      value:'',
      type:'text',
      placeHolder:'name',
    },
    {
      label:'surname',
      name:'surname',
      value:'',
      type:'text',
      placeHolder:'surname',
    },
    {
      label:'email',
      name:'email',
      value:'',
      type:'email',
      placeHolder:'email',
    },
    {
      label:'phone number',
      name:'contact_number',
      value:'',
      type:'number',
      placeHolder:'phone number',
    },
    {
      label:'password',
      name:'password',
      value:'',
      type:'password',
      placeHolder:'password',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClicked():void{
    console.log(this.signupForm)
  }
}
