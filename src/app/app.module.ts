import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { EventsComponent } from './components/events/events.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { GoalsComponent } from './components/goals/goals.component';
import { PomComponent } from './components/pom/pom.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MentorsComponent,
    WorkshopsComponent,
    EventsComponent,
    HeaderComponent,
    ContactusComponent,
    GoalsComponent,
    PomComponent,
    DevelopersComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
