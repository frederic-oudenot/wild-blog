import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent {
  //Injection formBuilder pour créer groupe de contrôles
  formBuilder = inject(FormBuilder);

  isPassword: boolean = false;
  type: string = 'password';

  // Création d'une variable pour lier avec templates HTML (formControlName) et (formGroup)
  signUpForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.formBuilder.group(
      {
        password: ['', [Validators.required, this.securePasswordValidator()]],
        passwordConfirm: [''],
      },
      { validators: this.passwordMatchValidator() }
    ),
  });

  // methode pour vérifier si le mot de passe correspond au bon format
  securePasswordValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const password = control.value || '';
      const pattern = /[a-zA-Z0-9\[+!@#$%^&*(),.?":{}|<>\]]{12,}/;
      const passwordValid = pattern.test(password);

      return passwordValid ? null : { securePassword: true };
    };
  }

  // methode pour vérifier si password et passwordConfirm sont identiques
  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const passwordConfirm = formGroup.get('passwordConfirm')?.value;
      return password === passwordConfirm ? null : { passwordMismatch: true };
    };
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Formulaire envoyé');
    }

    if (this.signUpForm.invalid) {
      console.log('Formulaire invalide');
    }
  }

  checkPassword(): void {
    this.isPassword ? (this.type = 'password') : (this.type = 'text');
    console.log(this.type);
    this.isPassword = !this.isPassword;
    console.log(
      '🚀 ~ SignupFormComponent ~ checkPassword ~ this.isPassword :',
      this.isPassword
    );
  }
}
