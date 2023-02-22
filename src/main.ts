import { enableProdMode, importProvidersFrom, inject } from '@angular/core'
import {bootstrapApplication} from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideRouter } from '@angular/router'
import { APP_ROUTES } from './app/app-routing'

import { environment } from './environments/environment'
import { HttpClientModule } from '@angular/common/http'



if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTES),
  ]
})
