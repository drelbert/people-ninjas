import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NinjaDataService } from '../ninja-data.service';
import { Ninja } from '../ninja';
import { switchMap } from 'rxjs/operators';


//Note, this component is acting as the parent which will pass data to the three nested components.
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private ninjaDataService: NinjaDataService,
    private route: ActivatedRoute
    ) { }
  //Defining a new member 'ninjaDetails' of Ninja.
  public ninjaDetails: Ninja;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('ninjaId');
          return this.ninjaDataService.getNinjaById(id);
        })
      )
    .subscribe((ninjaDetails: Ninja) => {
      this.ninjaDetails = ninjaDetails;
      this.pageContent.header.title = ninjaDetails.name;
      this.pageContent.sidebar = `The Ninja rating for ${ninjaDetails.name} is "${ninjaDetails.ninjaRating}."`;
    });
  }

  public pageContent = {
    header: {
      title: ''
    },
    sidebar: ''
  }
}
