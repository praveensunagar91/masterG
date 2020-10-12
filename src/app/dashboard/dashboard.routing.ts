import { Routes,RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AddasignmentComponent } from './addasignment/addasignment.component';
import { AddexammarkspredictionComponent } from './addexammarksprediction/addexammarksprediction.component';
import { ExammarkspredictionComponent } from './exammarksprediction/exammarksprediction.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CoursesComponent } from './courses/courses.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForumsComponent } from './forums/forums.component';
import { AddforumsComponent } from './addforums/addforums.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';



const arr:Routes=[

{path:'',children:[
{path:'', component:DashboardComponent},
{path:'faculty/:facultyID',component:FacultyComponent},
{path:'addAssignment',component:AddasignmentComponent},
{path:'addExamMarksPrediction',component:AddexammarkspredictionComponent},
{path:'examMarksPrediction',component:ExammarkspredictionComponent},
{path:'assignments',component:AssignmentComponent},
{path:'courses',component:CoursesComponent},
{path:'changePassword',component:ChangepasswordComponent},
{path:'forums',component:ForumsComponent},
{path:'addForums',component:AddforumsComponent},
{path:'feedback',component:FeedbackComponent},
{path:'addFeedback',component:AddfeedbackComponent}
]}

];

export const dashboardrouting=RouterModule.forChild(arr);
