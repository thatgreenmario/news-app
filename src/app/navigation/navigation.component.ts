import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NewsfetchserviceService } from '../newsfetchservice.service';
import { NewsData } from '../NewsData';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  sourcesList : NewsData[] = [];
  
  ngOnInit(): void {
    this.showAllSources();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private newsfetch: NewsfetchserviceService) {}

  showAllSources():void {
    this.sourcesList = this.newsfetch.allNews;
    /* this.newsfetch.getNews().subscribe(news => this.news = news); */
  }

  updateNewsList(source : NewsData):void{
    console.log('option selected');
    console.log(source);
    this.newsfetch.updateNewsBlock(source);
  }
}
