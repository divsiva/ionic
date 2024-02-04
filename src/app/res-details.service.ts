import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResDetailsService {
  constructor(private http: HttpClient) {}
  fetchResDetails(url: string) {
    console.log(url, 'url')
    return this.http.get(url)
  }
}
