import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CourseListComponent } from './course-list/course-list.component';
import { NaviComponent } from './navi/navi.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactsInfoComponent } from './contacts-info/contacts-info.component';
import { LoginComponent } from './programs/login/login.component';
import { BscoeComponent } from './programs/bscoe/bscoe.component';
import { BscsComponent } from './programs/bscs/bscs.component';
import { BsitComponent } from './programs/bsit/bsit.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    NaviComponent,
    CourseInfoComponent,
    ArticlesComponent,
    ContactsInfoComponent,
    LoginComponent,
    BscoeComponent,
    BscsComponent,
    BsitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'articles', component: ArticlesComponent},
      {path: 'contacts-info', component: ContactsInfoComponent},
      {path: 'course-info', component: CourseInfoComponent},
      {path: 'login', component: LoginComponent},
      {path: 'bscoe', component: BscoeComponent},
      {path: 'bscs', component: BscsComponent},
      {path: 'bsit', component: BsitComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent,
  CourseListComponent,
  CourseInfoComponent,
  ContactsInfoComponent]
})
export class AppModule { }
