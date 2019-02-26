import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insights-sidebar',
  templateUrl: './insights-sidebar.component.html',
  styleUrls: ['./insights-sidebar.component.css']
})
export class InsightsSidebarComponent implements OnInit {

  @Input() content: string;
  
  constructor() { }

  ngOnInit() {}


  public pageContent = {
    header: {
      title: 'Insights Sidebar Here'
    },
    content: {
      body: 'TODO...'
    }
  }
  }

