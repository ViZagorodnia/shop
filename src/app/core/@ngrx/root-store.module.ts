import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../environments/environment';

import { EffectsModule } from '@ngrx/effects';
import { ProductsStoreModule } from './products/products-store.module';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { routerReducers, RouterEffects } from './router';
import * as RouterActions from './router/';
import { metaReducers } from './meta-reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers, {
      metaReducers,
      // All checks will automatically be disabled in production builds
      runtimeChecks: {
        strictStateImmutability: true,      // default value is true
        strictActionImmutability: true,     // default value is true
        // router state is not serializable
        // set false if you don't use CustomSerializer
        strictStateSerializability: false,   // default value is false
        // router action is not serializable
        // set false
        // TaskModel which is used in Actions is not a plain JavaScript Object
        strictActionSerializability: false,  // default value is false
        strictActionWithinNgZone: true,     // default value is false
        strictActionTypeUniqueness: true    // default value is false
      }
    }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25,       // Retains last 25 states
      autoPause: true   // Pauses recording actions and state changes when the extension window is not open
    }) : [],
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    }),
    ProductsStoreModule
  ]
})
export class RootStoreModule { }
