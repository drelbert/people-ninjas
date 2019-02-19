import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ninja, ProjectDetails } from '../ninja';
import { NinjaDataService } from '../ninja-data.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  @Input() projectDetails: ProjectDetails;

  constructor() { }

  ngOnInit() {
  }

  //Object for submitted form data for passing around. 
  //Is an updated Project, has properties, title, updatedBy, etc.
  public updatedProject: ProjectDetails = {
    _id: '',
    title: '',
    updatedBy: '',
    completedLastWeek: '',
    upcomingWork: '',
    issues: '',
    projectDue: new Date()
  };
}



  
  


 
