import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  d: string;

  constructor() { }

  data_subject= new Subject<string>();
  data_event= new EventEmitter<string>();
  
}
