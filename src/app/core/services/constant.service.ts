import { InjectionToken } from '@angular/core'

export const APP_CONFIG = new InjectionToken<AppConfig>('config')

export interface AppConfig {
   app: string
   ver: string
   app_url: string
}
