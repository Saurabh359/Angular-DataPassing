import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registrationForm: FormGroup;
  isSubmit: boolean= false;

  constructor() { }

  ngOnInit(): void {

    this.registrationForm= new FormGroup({
          'fullname': new FormGroup({
                'firstname': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]+')]),
                'middlename': new FormControl(null, Validators.pattern('[a-zA-Z]+')),
                'lastname': new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]+')])
          }),
          'securityDetail': new FormGroup({
                'mobile': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
                'email': new FormControl(null, [Validators.required, this.invalidemail.bind(this)]),
                'password': new FormControl(null, Validators.required)
          }),
          'currentaddressDetail': new FormGroup({
                'address': new FormControl(null, Validators.required),
                'city': new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]+')]),
                'state': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]+')]),
                'country': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]+')])
          }),
          'permanentaddressDetail': new FormGroup({
                'address': new FormControl(null, Validators.required),
                'city': new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]+')]),
                'state': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]+')]),
                'country': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]+')])
          })
    });

  }

  get a(){ return this.registrationForm.controls; }
  get b(){ return (this.registrationForm.get('fullname') as FormGroup).controls; }
  get c(){ return (this.registrationForm.get('securityDetail') as FormGroup).controls; }
  get d(){ return (this.registrationForm.get('currentaddressDetail') as FormGroup).controls; }
  get e(){ return (this.registrationForm.get('permanentaddressDetail') as FormGroup).controls; }

  FormSubmit(){
      this.isSubmit= true;
      if(this.registrationForm.valid)
      {
            alert("Form Successfully Submitted");
      }
  }

  Reset(){
        this.isSubmit= false;
        this.registrationForm.reset();
  }

  AutoFill(){
        
      this.registrationForm.patchValue({
            'permanentaddressDetail': {
                  'address': this.d.address.value,
                  'city': this.d.city.value,
                  'state': this.d.state.value,
                  'country': this.d.country.value 
            }
      })
  }

  invalidemail(control: FormControl): {[s: string]: boolean }{ 
      let regex: RegExp= /[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]/;
      if(!regex.test(control.value)){
        return {'invalidEmail': true}  
      }
      return null;
   }

}