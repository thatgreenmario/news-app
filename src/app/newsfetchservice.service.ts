import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsData } from './NewsData';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsfetchserviceService {

  //Global variable storing All fetch data
  news : NewsData[] = [];

  constructor(
    private http:HttpClient
  ) { }

  private newsFetchURL = 'api/v1/topics';

  /* getNews(): Observable<NewsData[]> {
    return this.http.get<NewsData[]>(this.newsFetchURL)
  } */

  getNews() {
    return new Promise((resolve, reject) => {
    //An Http Get to my API to get the available languages in my application
    this.http.get<NewsData[]>(this.newsFetchURL).subscribe(res => {
    //Store the available languages in a data store
    this.news = res;
    resolve(true);
    })
    })
    }
}
