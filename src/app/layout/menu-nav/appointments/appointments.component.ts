import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

appointmemntNextButtonEvent:boolean=false;
appointmemntContinueButtonEvent:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  ButtonEvents(){
   this.appointmemntNextButtonEvent=true;
   this.appointmemntContinueButtonEvent=true;

}
}
