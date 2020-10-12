import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routing';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoadingComponent } from './loading/loading.component';
import { Interceptordemo } from './interceptors';







@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutusComponent,
    ContactusComponent,
    FaqComponent,
    PrivacypolicyComponent,
    TermsconditionsComponent,
    LoadingComponent,



],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NgxPaginationModule,
    ToastrModule.forRoot({ timeOut: 2000 }),

],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
