import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-sec-child',
  templateUrl: './sec-child.component.html',
  styleUrls: ['./sec-child.component.css']
})
export class SecChildComponent implements OnInit {

  @Output() dataemitter= new EventEmitter<string>();

  constructor(private data_service: DataService) { }

  ngOnInit(): void {
  }

  passdata(value: string): void{
    this.dataemitter.emit(value);
  }
}
