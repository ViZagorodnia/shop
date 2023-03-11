import { enableProdMode, importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideRouter } from '@angular/router'
import { APP_ROUTES } from './app/app-routing'

import { environment } from './environments/environment'
import { HttpClientModule } from '@angular/common/http'
import { RootStoreModule } from './app/core/@ngrx/root-store.module'
import { timingInterceptorProvider } from './app/core/interceptor/timing.interceptor'



if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(RootStoreModule),
    timingInterceptorProvider,
    provideRouter(APP_ROUTES),
  ]
})
