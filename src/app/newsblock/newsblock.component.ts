import { Component, OnInit } from '@angular/core';
import { NewsData } from '../NewsData';
import { NewsfetchserviceService } from '../newsfetchservice.service';

@Component({
  selector: 'app-newsblock',
  templateUrl: './newsblock.component.html',
  styleUrls: ['./newsblock.component.css']
})
export class NewsblockComponent implements OnInit {

  constructor(private newsfetch: NewsfetchserviceService) { }

  news : NewsData[] = [];
  ngOnInit(): void {
    this.getNews();
  }

  getNews():void {
    this.news = this.newsfetch.news;
    /* this.newsfetch.getNews().subscribe(news => this.news = news); */
  }

}
