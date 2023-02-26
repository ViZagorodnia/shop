import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'
import { Injectable, Provider } from '@angular/core'
import { filter, Observable, tap } from 'rxjs'

@Injectable()

export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const startDate = new Date()
      return next.handle(req).pipe(
        filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
        tap((event: HttpEvent<any>) => {
          if((event as HttpResponse<any>).url?.includes('products')) {
            const endDate = new Date()
            const legthOfRequest = Math.abs(endDate.getMilliseconds() - startDate.getMilliseconds())
            console.log('Length of request in milsec - ', legthOfRequest)
          }
          return event
        })
      )
  }
}

export const timingInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TimingInterceptor,
  multi: true
}
