import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private router: Router){}

 
  

  scrollToFragment(fragment: string, event: MouseEvent) {
    event.preventDefault();
    const element = document.querySelector(`#${fragment}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.router.navigate([], {
        fragment: fragment,
        replaceUrl: true
      });
    }
  }



  

}
