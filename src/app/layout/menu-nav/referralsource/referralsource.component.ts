import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-referralsource',
  templateUrl: './referralsource.component.html',
  styleUrls: ['./referralsource.component.scss']
})
export class ReferralsourceComponent implements OnInit {
    resourcedetails: FormGroup;
    sourcer: string;
    ssource: string;


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openview(contentz) {
    this.modalService.open(contentz, {size:'lg'});
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
  }
  opensearch(content) {
    this.modalService.open(content, {size:'lg'});
}
}
