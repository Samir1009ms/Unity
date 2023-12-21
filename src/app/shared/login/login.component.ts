import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private router: Router,
    private fb: FormBuilder

  ) { }
  items: any[] = [
    { img: 'assets/img/league.png', title: 'League of Legends®', status: "Online Game", view: '2.8K viewers' },
    { img: 'assets/img/callofduty.png', title: 'Call of Duty®', status: "Shooting", view: '2.8K viewers' },
    { img: 'assets/img/dota.png', title: 'The Dota 2', status: "eSport", view: '2.8K viewers' },
  ]

  handleClose() {
    this.router.navigate(['/']);
  }
  validateForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
