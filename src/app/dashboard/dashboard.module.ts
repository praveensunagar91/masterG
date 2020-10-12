import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AddexammarkspredictionComponent } from './addexammarksprediction/addexammarksprediction.component';
import { AddasignmentComponent } from './addasignment/addasignment.component';
import { ExammarkspredictionComponent } from './exammarksprediction/exammarksprediction.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CoursesComponent } from './courses/courses.component';
import { GrdFilterPipe } from './courses/search-filter.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { dashboardrouting } from './dashboard.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { Interceptordemo } from '../interceptors';
import { LoadingComponent } from './loading/loading.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForumsComponent } from './forums/forums.component';
import { AddforumsComponent } from './addforums/addforums.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';



@NgModule({
  declarations:[
    DashboardComponent,
    FacultyComponent,
    AddexammarkspredictionComponent,
    AddasignmentComponent,
    ExammarkspredictionComponent,
    AssignmentComponent,
    CoursesComponent,
    GrdFilterPipe,
    LoadingComponent,
    ChangepasswordComponent,
    ForumsComponent,
    AddforumsComponent,
    FeedbackComponent,
    AddfeedbackComponent,
  ],
  imports:[
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    dashboardrouting,
    NgxPaginationModule,
    ToastrModule.forRoot({ timeOut: 2000 }),


  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true}],
})

export class DashboardModule{}
