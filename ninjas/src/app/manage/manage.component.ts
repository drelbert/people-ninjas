import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {

  }


  public pageContent = {
    header: {
      title: 'Manage'
    }
  }

}