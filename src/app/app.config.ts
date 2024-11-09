import { ApplicationConfig } from '@angular/core';
import { ExtraOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';


const extraOptions: ExtraOptions = { 
  scrollPositionRestoration: 'enabled',
anchorScrolling: 'enabled' }

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,

    ), 
    provideClientHydration()]
};
