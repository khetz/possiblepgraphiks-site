import { Component, ElementRef, ViewChild } from '@angular/core';
import emailjs from '@emailjs/browser';
import { response } from 'express';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('userEmail') userEmail!: ElementRef;
  @ViewChild('message') message!: ElementRef;

  currentYear: number = new Date().getFullYear();
  nameError: string = '';
  emailError: string = '';
  messageError: string = '';

  isNameValid(name: string) {
    let valid = name.length >= 3;
    return valid;
  }

  isEmailValid(email: string) {
    let valid = /^\S+@\S+\.\S+$/.test(email);
    return valid;
  }

  isMessageValid(message: string) {
    let valid = message.length >= 20;
    return valid;
  }

  contactInputsValid() {
    const name = this.nameInput.nativeElement.value.trim();
    const email = this.userEmail.nativeElement.value.trim();
    const message = this.message.nativeElement.value.trim();

    let isNameValid = this.isNameValid(name);
    let isEmailValid = this.isEmailValid(email);
    let isMessageValid = this.isMessageValid(message);

    if (!isNameValid)  this.nameError = 'Invalid name';
    if (!isEmailValid) this.emailError = 'Invalid email format';
    if (!isMessageValid) this.messageError = 'The message must be at least 20 characters long';

    return isNameValid && isEmailValid && isMessageValid;
  }

  sendEmail() {
    if (!this.contactInputsValid()) return;

    const templateParams = {
      from_name: this.nameInput.nativeElement.value.trim(),
      user_email: this.userEmail.nativeElement.value.trim(),
      message: this.message.nativeElement.value.trim(),
      to_name: "Vukheta"
    }

    emailjs.send(
      'service_3v4a92k',
      'template_yr7tdgg',
      templateParams,
      'LZxIcxEnyhx_CZwLm'
    ).then(
      (response) => {
        alert('Email sent successfully!')
      },
      (error) => {
        alert('Failed to send email. Please try again.')
      }
    );
  }
}
