import { inject } from '@angular/core';
import {
  Actions,
  ROOT_EFFECTS_INIT,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, interval, map, skip, tap } from 'rxjs';
import { appFeature } from './app.feature';
import { appActions } from '../actions/app.actions';
import { AppState } from './app.state';

export const saveToStorage = createEffect(
  (store: Store = inject(Store)) =>
    store
      .select(appFeature.selectAppState)
      .pipe(
        skip(1),
        tap((state) =>
          localStorage.setItem(appFeature.name, JSON.stringify(state))
        )
      ),
  { functional: true, dispatch: false }
);

export const loadFromStorage = createEffect(
  (actions = inject(Actions)) =>
    actions.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map((_) =>
        appActions.reset({
          state: JSON.parse(
            localStorage.getItem(appFeature.name) ?? 'null'
          ) as AppState | null,
        })
      )
    ),
  { functional: true }
);
