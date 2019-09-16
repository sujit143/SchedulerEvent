import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patdetails } from '../patdetails';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss']
})
export class DemographicsComponent implements OnInit {
    form:boolean=false;
    body:boolean=true;
    table:boolean=false;

    details: FormGroup;
    callerdetails: FormGroup;

    general: FormGroup;
    address: FormGroup;
    contact: FormGroup;
    other: FormGroup;

    isActive: Boolean = false;
    closeResult: string;
    control = new FormControl();
    relations: string[] = ['Child', 'Parent', 'Self', 'Spouse', 'Aunt', 'Cousin', 'Former Spouse', 'Grandchild', 'Inlaw', 'Niece/Nephew'];
    filteredRelation: Observable<string[]>;

    patname: string = '';
    fisrtname: string = '';
    lastname: string = '';
    phone: string = '';
    email: string = '';
    arr: Patdetails[] = [
        new Patdetails('ak', 'abc', '123', 'sdg'),
        new Patdetails('bs', 'efg', '456', 'vdv'),
        new Patdetails('cd', 'hij', '789', 'tgh'),
        new Patdetails('asj', 'klm', '111', 'bec'),
        new Patdetails('bsfd', 'nop', '222', 'sdm'),
        new Patdetails('nm', 'qrs', '333', 'kle'),
        new Patdetails('re', 'tuv', '444', 'kls'),
        new Patdetails('yt', 'wxy', '555', 'git'),
        new Patdetails('jh', 'bsf', '666', 'bvb')
    ];

  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.details = this.fb.group({
        patientname: new FormControl(null, Validators.required),
        patientDOB: new FormControl(null),
        phone: new FormControl('', [Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
        email: new FormControl(null, [Validators.required, Validators.email])
    });

    this.callerdetails = this.fb.group({
        callername: new FormControl(null, Validators.required),
        phoneno: new FormControl('', [Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/), Validators.required]),
        relation: new FormControl(null)
    });

    this.general = this.fb.group({
        firstname: new FormControl(null, Validators.required),
        middlename: new FormControl(null),
        lastname: new FormControl(null, Validators.required),
        dob: new FormControl(null),
        gender: new FormControl(null, Validators.required)
    });

    this.address = this.fb.group({
        address1: new FormControl(null),
        address2: new FormControl(null),
        zip: new FormControl(null),
        city: new FormControl(null),
        state: new FormControl(null)
    });

    this.contact = this.fb.group({
        home: new FormControl('', [Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
        cell: new FormControl('', [Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
        workphone: new FormControl('', [Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        mode: new FormControl(null)
    });

    this.other = this.fb.group({
        ssn: new FormControl(null),
        language: new FormControl(null)
    });


  }

  openform() {
    let pn = this.details.get('patientname').value;
    console.log(pn);

    for (let i=0; i<this.arr.length; i--) {
        let pname = this.arr[i].patname;
        console.log(this.arr.length);
        console.log(pname);
        if (pn === pname) {

            this.body=false;
            this.form=false;
            this.table=true;

            console.log('pname');
    //         this.modalService.open(content1, { size: 'lg'});

      // }
        }

        else
         {
            this.form=true;
            this.body=false;
            this.table=false;

            this.general.patchValue({
                firstname: this.details.value.patientname
            });
        }
    }
}

checked:boolean = false;

addprop1(e){
  if(e.target.checked){
    this.checked = true;
  }else{
    this.checked = false;
  }
}



}
