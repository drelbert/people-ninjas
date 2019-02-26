import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  //Defining the property class to accept content as an input.  
  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

}
