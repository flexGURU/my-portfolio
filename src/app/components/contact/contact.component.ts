import { CommonModule } from '@angular/common';
import { ASTWithName } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(
    private fb: FormBuilder
  ){}

  contactForm: FormGroup = this.fb.group({
    from_name: '',
    to_name: '',
    email: '',
    subject: '',
    message: ''
  })


  templateParams = {
    name: 'John',
    notes: 'Check this out!',
  };

  async send(){
    emailjs.init('-H-AP4PFvRyThJ50N')

    let response = await emailjs.send('service_5vq42js', 'template_k1m3qny', {
      name: this.contactForm.value.from_name,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    });
    this.contactForm.reset()

    alert("email sent")
      
    }
    
  

}
