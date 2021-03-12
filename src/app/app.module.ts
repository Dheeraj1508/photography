import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { GoalsComponent } from './components/goals/goals.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { TeamComponent } from './components/team/team.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EventsComponent,
    WorkshopsComponent,
    GoalsComponent,
    MentorsComponent,
    TeamComponent,
    ContactusComponent,
    DevelopersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
