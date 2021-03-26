import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PomModel } from 'src/app/models/model';

@Component({
  selector: 'app-pom',
  templateUrl: './pom.component.html',
  styleUrls: ['./pom.component.css']
})
export class PomComponent implements OnInit {
  poms: PomModel[] =[];

  constructor(private db : AngularFirestore) { }

  ngOnInit() {
    // this.db.collection<PomModel>('pom',q=>q.orderBy('photo_rank','asc')).snapshotChanges().subscribe(pics=>{
    //   this.poms = [];
    //   pics.forEach(pic=>{
    //     this.poms.push(pic.payload.doc.data())
    //   })
    //   console.log(this.poms);
    // })
    
  }

}
