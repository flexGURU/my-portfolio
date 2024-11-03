import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { SpecialitiesComponent } from "./components/specialities/specialities.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HomeComponent,
    AboutComponent, ExperienceComponent, SpecialitiesComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
