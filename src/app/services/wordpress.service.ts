import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  getposts(){
    return this.http.get('https://nitin360.com/wp-json/wp/v2/posts');
  }
}
