import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appFeature } from './redux/app-feature/app.feature';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideState(appFeature),
    provideStoreDevtools({
      maxAge: 50
    }),
    provideRouter(routes), 
    provideAnimations()
  ]
};
