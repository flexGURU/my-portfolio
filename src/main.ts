// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, ExtraOptions, withRouterConfig } from '@angular/router';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64] // Adjust the offset for any fixed headers
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        // Define your routes here if needed
      ],
      withRouterConfig(routerOptions) // Apply the router options
    )
  ]
});
