import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appFeature } from './redux/app-feature/app.feature';
import { provideEffects } from '@ngrx/effects';
import * as appEffects from './redux/app-feature/app.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideState(appFeature),
    provideEffects(appEffects),
    provideStoreDevtools({
      maxAge: 50
    }),
    provideRouter(routes), 
    provideAnimations()
  ]
};

