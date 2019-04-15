import {
  Component, OnInit, Input, OnChanges, SimpleChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';
import Server from '../models/server.model';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // @Input() server: Server;
  @Input('serverItem') server: Server; //assing alias 'serverItem' for 
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  //access a item from the content page (from parent)
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('ServerElementComponent->constructor called');
  }

  //gets called one time when a change is fired.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called', changes);
  }

  //gets called at first like the constructor
  ngOnInit() {
    console.log('ngOnInit called');
    console.log('ngOnInit header, textContent: ', this.header.nativeElement.textContent);
    console.log('ngOnInit paragraph, textContent: ', this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  //get called whenever angular detects a change
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('ngAfterContentInit paragraph, textContent: ', this.paragraph.nativeElement.textContent);

  }

  //gets called after ngDoCheck got called (change detection cycle).
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('ngAfterViewInit header, textContent: ', this.header.nativeElement.textContent);
  }

  //gets called when an item gets removed from the dom (remove an item from array for instance)
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
