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

  downloadResume(){
    let link = document.createElement('a');
    link.download = 'NGANGA_MUKUNA_RESUME.pdf'
    link.href = "../../../assets/JOHN MUKUNA NGANGA RESUME.pdf"
    link.click();
  }





  

}
