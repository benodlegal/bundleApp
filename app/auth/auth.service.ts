// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

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
    console.log('your access token is now in local storage ' + localStorage.getItem('accessToken'));
    return localStorage.getItem('accessToken');
  }

  public isAuthenticated(): boolean {
    //  get the token
    const accessToken = this.getToken();
    accessToken;

    return true;
  }
}