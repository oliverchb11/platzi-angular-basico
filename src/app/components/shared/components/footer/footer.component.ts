import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public emailField: FormControl;
  constructor() {
    this.emailField = new FormControl('',
    [
      Validators.email,
      Validators.required
    ]);
  }

  ngOnInit(): void {
  }

  public sendEmail(valor: string): void {
    if (this.emailField.valid){
      console.log(valor);
    }
  }
}
