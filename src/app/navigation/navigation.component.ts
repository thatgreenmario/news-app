import { Component, OnInit ,ViewChildren, QueryList, ElementRef} from '@angular/core';
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

   currentlyDisplayedCheckboxList : NewsData[] = [];
   checked = [];
   @ViewChildren("checkboxes") checkboxes!: QueryList<any>;
   allToggleIsHidden : Boolean = true;
   
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
    this.currentlyDisplayedCheckboxList = [...this.newsfetch.allNews];
  }

  updateNewsListFromCheckbox(source : NewsData):void{

    this.allToggleIsHidden = false;
    this.newsfetch.updateNewsBlock(source);
  }

  uncheckAll() {
    this.newsfetch.clearNewsBlock();
    this.checkboxes.forEach((element) => {
      element.checked = false;
      console.log(element);
    });

}}
