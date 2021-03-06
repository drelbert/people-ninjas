import { Component, OnInit, Input } from '@angular/core';

import { Ninja, ProjectDetails } from '../ninja';
import { NinjaDataService } from '../ninja-data.service';




@Component({
  selector: 'app-ninja-details',
  templateUrl: './ninja-details.component.html',
  styleUrls: ['./ninja-details.component.css']
})
export class NinjaDetailsComponent implements OnInit {



 @Input() ninja: Ninja;
//Object for submitted form data for passing around. 
//Is a newProject, has properties, title, updatedBy, etc.
 public newProject: ProjectDetails = {
    _id: '',
    title: '',
    updatedBy: '',
    completedLastWeek: '',
    upcomingWork: '',
    issues: '',
    projectDue: new Date()
  };



public formVisible: boolean = false;
public formError: string;

constructor(
  private ninjaDataService: NinjaDataService) { }


ngOnInit(): void {

   }
   
  public pageContent = {
    header : {
      title: ''
    }
  }

private formIsValid(): boolean {
  if (this.newProject.title && this.newProject.updatedBy && this.newProject.completedLastWeek && this.newProject.upcomingWork && this.newProject.issues && this.newProject.projectDue) {
    return true;
  } else {
    return false;
  }
}

public onProjectSubmit(): void {
  this.formError = '';
  if (this.formIsValid()) {
    console.log(this.newProject);
    this.ninjaDataService.addProjectByNinjaId(this.ninja._id, this.newProject)
      .then(projectDetail => {
        console.log('Project saved Jerr.', projectDetail);
        this.ninja.projectDetails.unshift(projectDetail);
        this.resetAndHideProjectForm();
      });
    } else {
      this.formError = 'Please complete each field.';
    }
  }

  private resetAndHideProjectForm(): void {
    this.formVisible = false;
    this.newProject.title = '';
    this.newProject.updatedBy = '';
    this.newProject.completedLastWeek = '';
    this.newProject.upcomingWork = '';
    this.newProject.issues = '';
    this.newProject.projectDue = new Date();
   }

}



