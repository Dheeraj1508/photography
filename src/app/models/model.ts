import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

export class PomModel{
    constructor(public photo_url: string, public photographer : string , public photo_description : string, public photo_rank : number){

    }
}
export class EventsModel{
    constructor(public event_date : Date,public event_description : string, public event_head : string, public event_name : string, public event_winners : string , public photo_url : string ){

    }
}


