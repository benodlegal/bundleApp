// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthService {
  cachedRequests: Array<HttpRequest<any>> = [];
public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
}
public retryFailedRequests(): void {
  // retry the requests. this method can
  // be called after the token is refreshed
}
 public getToken(): string {
    //let accessToken =localStorage.getItem('accessToken');
   return 'accessToken456';
  }
  
  public isAuthenticated(): boolean {
   //  get the token
    const accessToken = this.getToken();

    return null;
  }
}