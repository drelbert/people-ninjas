import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrameworkComponent } from './framework/framework.component';
import { ManageComponent } from './manage/manage.component';
import { TheNinjasComponent } from './the-ninjas/the-ninjas.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { InsightsSidebarComponent } from './insights-sidebar/insights-sidebar.component';
import { NinjaDetailsComponent } from './ninja-details/ninja-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FrameworkComponent,
    ManageComponent,
    TheNinjasComponent,
    PageHeaderComponent,
    InsightsSidebarComponent,
    NinjaDetailsComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'manage',
        component: ManageComponent
      },
      {
        path: 'ninja/:ninjaId',
        component: DetailsPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
