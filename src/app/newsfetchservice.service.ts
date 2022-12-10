import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsData } from './NewsData';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsfetchserviceService {

  constructor(
    private http:HttpClient
  ) { }

  private newsFetchURL = 'api/v1/topics';

  getNews(): Observable<NewsData[]> {
    return this.http.get<NewsData[]>(this.newsFetchURL)
  }
}
