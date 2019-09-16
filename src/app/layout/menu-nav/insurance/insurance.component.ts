import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
    details: FormGroup;

    control = new FormControl();
    dateofaccident: string = '';
    zip: string = '';
    accidentcity: string = '';
    accidentstate: string ='';

  constructor( private modalService: NgbModal,private fb: FormBuilder) { }

  ngOnInit() {
    this.details = this.fb.group({
        patientname: new FormControl(null, Validators.required),
        patientDOB: new FormControl(null),
        phone: new FormControl('', [Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        zip: new FormControl(null)
    });
  }

}
