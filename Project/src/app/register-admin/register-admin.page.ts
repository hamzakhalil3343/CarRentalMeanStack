import { Component, OnInit } from '@angular/core';
import {AbstractControl,Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../sdk/custom/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.page.html',
  styleUrls: ['./register-admin.page.scss'],
})
export class RegisterAdminPage implements OnInit {

  constructor(private formBuilder: FormBuilder,private userService: UserService,
    private router: Router) {}
  registerForm: FormGroup;
  loading = false;
  ngOnInit() {
    this.formInitializer();
  }



  save() {
    const loginData = this.registerForm.value;
    console.log('loginData', loginData);
    // we need to send this data to our node.js server

    this.userService.adminRegister(loginData).subscribe(
      data => {
        console.log('got response from server', data);
        
        this.loading = false;
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }










  formInitializer() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirm_password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          this.matchOtherValidator('password')
        ]
      ]
    });
  }

  matchOtherValidator(otherControlName: string) {
    return (control: AbstractControl): { [key: string]: any } => {
      const otherControl: AbstractControl = control.root.get(otherControlName);

      if (otherControl) {
        const subscription: Subscription = otherControl.valueChanges.subscribe(
          () => {
            control.updateValueAndValidity();
            subscription.unsubscribe();
          }
        );
      }

      return otherControl && control.value !== otherControl.value
        ? { match: true }
        : null;
    };
  }

}
