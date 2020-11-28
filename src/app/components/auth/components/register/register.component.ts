import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public formulario: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): void{
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public registerUsers(userResgister: FormGroup, event: Event): void{
    event.preventDefault();
    const {email, password} = userResgister.value;
    console.log(email, password);
    this.authService.createUser(email, password);
    this.router.navigate(['auth/login']);
  }

  get validRequiredEmail(): boolean{
    return this.formulario.get('email').hasError('required') && this.formulario.get('email').dirty;
  }

  get validEmailNoValid(): boolean{
    return this.formulario.get('email').hasError('email');
  }

  get validRequiredPassword(): boolean{
    return this.formulario.get('password').hasError('required') && this.formulario.get('password').dirty;
  }

}
