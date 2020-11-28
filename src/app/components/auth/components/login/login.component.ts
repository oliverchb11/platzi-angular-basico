import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formulario: FormGroup;
  public hola = "hola";
  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm(): void{
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength]]
    });
  }

  public loginUsers(loginData: FormGroup, event: Event): void{
    event.preventDefault();
    if (this.formulario.valid){
      const {email, password} = loginData.value;
      this.auth.loginUser(email, password).then(() => {
        this.router.navigate(['/admin']);
      }).catch((err) => {
        alert('Los datos son incorrectos');
      });
    }
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
