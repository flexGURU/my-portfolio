import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { InterSectionObserver } from '@syncfusion/ej2-grids';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  {
  currentFragment: string | null = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Listen to fragment changes
    this.activatedRoute.fragment.subscribe(fragment => {
      this.currentFragment = fragment;
    });
  }

  scrollToFragment(fragment: string, event: MouseEvent) {
    event.preventDefault();
    const element = document.querySelector(`#${fragment}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update the URL without reloading
      this.router.navigate([], {
        fragment: fragment,
        replaceUrl: true
      });
    }
  }

  // Optional: Update active state on scroll
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = ['home', 'projects', 'experience', 'specialities', 'contact'];
    
    for (const section of sections) {
      const element = document.querySelector(`#${section}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Check if section is in viewport (with some buffer)
        if (rect.top >= -50 && rect.top <= 150) {
          if (this.currentFragment !== section) {
            this.router.navigate([], {
              fragment: section,
              replaceUrl: true
            });
          }
          break;
        }
      }
    }
  }
  }
  
