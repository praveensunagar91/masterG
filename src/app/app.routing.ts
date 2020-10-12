import { Routes,RouterModule,PreloadAllModules } from "@angular/router";
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { AuthguardService } from './authguard.service';
import { DashboardResolverService } from './dashboard-resolver.service';


const arr:Routes=[
{path:'',component:MainComponent},
{path:'aboutUs',component:AboutusComponent},
{path:'contactUs',component:ContactusComponent},
{path:'faq',component:FaqComponent},
{path:'privacyPolicy',component:PrivacypolicyComponent},
{path:'termsConditions',component:TermsconditionsComponent},
{path:'dashboard' ,canLoad:[AuthguardService], loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)}

];

export const routing=RouterModule.forRoot(arr,{preloadingStrategy:PreloadAllModules});
