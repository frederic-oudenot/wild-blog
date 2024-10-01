import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Message } from '../../models/message.type';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  message: Message = {
    lastname: '',
    firstname: '',
    email: '',
  };

  constructor() {}

  onSubmit() {
    console.log('Formulaire validé');
  }

  onReset() {
    this.message.lastname = '';
    this.message.firstname = '';
    this.message.email = '';
    console.log('Reset');
  }
}
