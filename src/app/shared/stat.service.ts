import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Pv {
  state: boolean;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class StatService {
  private API = {
    pv: '/pv/set'
  };

  constructor(private http: HttpClient) {}

  getPv() {
    return this.http.get(this.API.pv);
  }
}
