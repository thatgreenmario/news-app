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
  selectAllFilter = true;
  selectSingleFilter = true;
  
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
    this.newsfetch.updateNewsBlock(source);
    this.selectAllFilter = false;
    this.checkboxBehaviour(2);
  }

  updateAllNewsList(source : NewsData[]):void{
    this.newsfetch.updateAllNewsBlock(source);
    this.checkboxBehaviour(1);
  }

  checkboxBehaviour(input : number):void{
    if(this.selectSingleFilter == false && this.selectAllFilter == false && input == 1)
    {
      this.selectSingleFilter = true;
      this.selectAllFilter = true;
    }else{
      this.selectSingleFilter = false;
      this.selectAllFilter = false;
    }

    if(input == 2)
    {
      this.selectSingleFilter = false;
      this.selectAllFilter = false;
    }
     
    
  }
}
