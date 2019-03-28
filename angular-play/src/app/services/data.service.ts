import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Album } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  service_url = 'https://jsonplaceholder.typicode.com/albums?_limit=5';

  constructor(private http:HttpClient) { 
    console.log('Data service consructed')
  }

  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(this.service_url);
  }
}
