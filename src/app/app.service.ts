import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private API = {
    pv: '/pv/set'
  };

  constructor(private http: HttpClient) {}

  getPv() {
    return this.http.get(this.API.pv);
  }
}
