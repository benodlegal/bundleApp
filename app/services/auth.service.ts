// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import 'nativescript-localstorage';

@Injectable()
export class AuthService {
  public getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  public setAccessToken(accessToken): void {
    localStorage.setItem('accessToken', accessToken);
  }
}