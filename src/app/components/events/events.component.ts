import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EventsModel } from 'src/app/models/model';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events : EventsModel[] = [];

  constructor(private db :AngularFirestore) { }

  ngOnInit(): void {
    // this.db.collection<EventsModel>('Events',q=>q.orderBy('event_date','desc').limit(1)).snapshotChanges().subscribe(events=>{
    //   this.events = [];
    //   events.forEach(event=>{
    //     this.events.push(event.payload.doc.data())
    //   })

    // })
    

  }

}
