import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsData } from './NewsData';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsfetchserviceService {

  //Global variable storing All fetch data
  newsBlockData : NewsData[] = [];
  allNews : NewsData[] = [];

  constructor(
    private http:HttpClient
  ) { }

  /* private newsFetchURL = 'api/v1/topics'; */
  private newsFetchURL = 'https://us-central1-dnr-news-app.cloudfunctions.net/topics';

  getNews() {
    return new Promise((resolve, reject) => {
    this.http.get<NewsData[]>(this.newsFetchURL).subscribe(res => {
    this.allNews = [...res];
    resolve(true);
    })
    })
    }

    updateNewsBlock(selectedNews : NewsData){

      /* this.newsBlockData.length = 0;
       this.newsBlockData.push(selectedNews); */
       if(!this.newsBlockData.includes(selectedNews)){
        this.newsBlockData.push(selectedNews);
       }else{
        this.newsBlockData.splice(this.newsBlockData.indexOf(selectedNews), 1)
       }
    }

    clearNewsBlock(){
      this.newsBlockData.length = 0
    }
}
