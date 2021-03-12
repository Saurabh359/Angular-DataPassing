import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  @Input() value1: string;
  value2: string;
  value3: string;
  
  constructor(private data_service: DataService) { }

  ngOnInit(): void {
    this.data_service.data_subject.subscribe(data=>{
      this.value2=data
    });

    this.data_service.data_event.subscribe(data=>{
      this.value3=data
    })
  }

}
