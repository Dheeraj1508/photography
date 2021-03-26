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

import { ContactusComponent } from './components/contactus/contactus.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { FormsModule } from '@angular/forms';
import { PomComponent } from './components/pom/pom.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EventsComponent,
    WorkshopsComponent,
    GoalsComponent,
    MentorsComponent,

    ContactusComponent,
    DevelopersComponent,
    PomComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//nitial exceeded maximum budget. Budget 500.00 kB was not met by 395.70 kB with a total of 895.70 kB.
