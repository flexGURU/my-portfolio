// appconfig.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ExtraOptions, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const extraOptions: ExtraOptions = { 
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes
      
    ),      
    provideClientHydration(),
    importProvidersFrom(
      BrowserAnimationsModule,               
      ToastrModule.forRoot()                 
    )
  ]
};
