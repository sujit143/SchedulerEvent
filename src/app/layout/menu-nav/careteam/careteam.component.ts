import { Component, OnInit } from '@angular/core';
import { Member } from '../Member';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-careteam',
  templateUrl: './careteam.component.html',
  styleUrls: ['./careteam.component.scss']
})
export class CareteamComponent implements OnInit {
    arrCare:Member[]=[
        new Member('Chalishazar Manasi','Active','Physician'),
        // new Member('Moerdler Esthe','Active','Physician'),
        // new Member('Moise Anson ','Active','Physician'),
    ];
    //pop up declration
    updatedItem:number;
    member:string='';
    status:string='';
    role:string='';
    // editmember:string='';
    // editstatus:string='';
    // editrole:string='';
    // msg = 'Are You Sure!';
    closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
// Edit modal popup
openEdit(content,i) {
    console.log(i);
    this.member = this.arrCare[i].member;
    this.status = this.arrCare[i].status;
    this.role = this.arrCare[i].role;
    // console.log('updating');

    this.updatedItem = i;

    this.modalService.open(content,{size:'lg'});
    // this.modalService.dismissAll();

  }


  // add modal popup
  openAdd(content4,i) {
    console.log(i);
    // this.member = this.arrCare[i].member;
    // this.status = this.arrCare[i].status;
    // this.role = this.arrCare[i].role;
    // console.log('updating');

    this.updatedItem = i;

    this.modalService.open(content4,{size:'lg'});
    // this.modalService.dismissAll();
  }



//   try

// open(content) {
//     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'},).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }


// /// get dismiss function
//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return  `with: ${reason}`;
//     }
//   }

//add group pop

addgrp(content5,i) {
    console.log(i);
    // this.member = this.arrCare[i].member;
    // this.status = this.arrCare[i].status;
    // this.role = this.arrCare[i].role;
    // console.log('updating');

    this.updatedItem = i;

    this.modalService.open(content5,{size:'lg'});
    // this.modalService.dismissAll();
  }
}
