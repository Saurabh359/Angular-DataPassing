import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [DataService]
})
export class ParentComponent implements OnInit {

  data1: string;
  @ViewChild('data2') data2: ElementRef;
  data3: string;
  
  constructor(private data_service: DataService) { }

  ngOnInit(): void {
  }

  getData(data : string): void{
    this.data3=data;
  }

  emittData2(value: ElementRef){
    let data2= (<HTMLInputElement>event.target).value;
    this.data_service.data_subject.next(data2);
  }

  emittDataEvent(){
    let data2= this.data2.nativeElement.value;
    this.data_service.data_event.emit(data2);
  }
}
