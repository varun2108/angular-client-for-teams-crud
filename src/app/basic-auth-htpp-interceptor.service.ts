import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthHtppInterceptorService implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
  const authReq = req.clone({
    headers: new HttpHeaders({
      authorization:sessionStorage.getItem('token')
    })
  });


  console.log('Intercepted HTTP call', authReq);

  return next.handle(authReq);
}else{
  return next.handle(req);
}
}
}
