import { enableProdMode, importProvidersFrom, inject } from '@angular/core'
import {bootstrapApplication} from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { RouterModule } from '@angular/router'
import { APP_ROUTES } from './app/app-routing'

import { environment } from './environments/environment'



if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES))
  ]
})
