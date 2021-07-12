import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  formsObject: FormObject[] =[
    {
      label:'first name',
      name:'name',
      value:'',
      type:'text',
      placeHolder:'name',
      validationGroup:{
        inputType: "tel",
        minMax:{
          max:10,
          min:10
        },
      }
    },
    {
      label:'surname',
      name:'surname',
      value:'',
      type:'text',
      placeHolder:'surname',
      validationGroup:{
        inputType: "tel",
        minMax:{
          max:2,
          min:10
        },
      }
    },
    {
      label:'email',
      name:'email',
      value:'',
      type:'email',
      placeHolder:'email',
      validationGroup:{
        inputType: "number",
        minMax:{
          max:10,
          min:10
        },
      }
    },
    {
      label:'phone number',
      name:'contact_number',
      value:'',
      type:'number',
      placeHolder:'phone number',
      validationGroup:{
        inputType: "number",
        minMax:{
          max:10,
          min:10
        },
      }
    },
    {
      label:'password',
      name:'password',
      value:'',
      type:'password',
      placeHolder:'password',
      validationGroup:{
        inputType: "number",
        minMax:{
          max:3,
          min:16
        },
      }
    }
  ]
  dynamicForm : FormGroup;
  constructor() {
    this.dynamicForm = new FormGroup(this.genFormGroup(this.formsObject));
   }

  private genFormGroup(fo:FormObject[]):{[r:string]:AbstractControl}{
    let fc = fo.map(f=>{
      console.log(f);
      const va = this.genValidation(f.validationGroup);
      return {[f.name]:new FormControl(f.value,va)}
    }).reduce((r,i)=>{
      let k = Object.keys(i)[0];
      r[k] = i[k];
      return r;
    },{});
    return fc;
  }

  ngOnInit(): void {
    console.log(this.genFormGroup(this.formsObject));
  }

  private genValidation(vg: ValidationGroup):any[]{
    const va=[];
    va.push(Validators.required);
    const {min, max} =vg?.minMax;
    if(vg?.minMax){
      if(vg?.inputType === 'number' || vg?.inputType === 'tel'){
        va.push(Validators.min(min));
        va.push(Validators.max(max));
      }
      else{
        va.push(Validators.minLength(min));
        va.push(Validators.maxLength(max));
      }
    }
    console.log('validation array', va);
    return va;
  }

  onButtonClicked(){
    console.log('Button Clicked')
    console.log(this.dynamicForm);
  }

}

export interface FormObject{
  label: string;
  name: string;
  value:any;
  type:string;
  placeHolder:string;
  validationGroup:ValidationGroup
}

export interface ValidationGroup {
  inputType: string,
  minMax:MinMaxValidation,
}

export interface MinMaxValidation {
    min:number,
    max:number
}

