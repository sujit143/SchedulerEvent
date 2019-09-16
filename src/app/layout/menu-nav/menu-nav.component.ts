import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './data.service';
import { Practice } from './practice';
import { Provider } from './provider';
import { Location } from './location';
import { Specaility } from './speciality';
import * as _ from 'lodash';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-menu-nav',
    templateUrl: './menu-nav.component.html',
    styleUrls: ['./menu-nav.component.scss']

})
export class MenuNavComponent implements OnInit {
    initialForm:FormGroup;
    selectedIndex = 0;

    constructor(private modalService: NgbModal, private _data: DataService, private fb:FormBuilder) { }

    schedule:boolean=false;

    myCases = false;
    officeDashboard = false;
    adjusterDashboard = false;

    arrprac:Practice[]=[];
    arraypractice:Practice[]=[];
    public localFields: Object = { text: 'name' };
    public localWaterMark: string = 'Select practice';

    arrloc:Location[]=[];
    arraylocation:Location[]=[];
    public localFields1: Object = { text: 'name' };
    public localWaterMark1: string = 'Select location';

    arrprov:Provider[]=[];
    public localFields2: Object = { text: 'displayName' };
    public localWaterMark2: string = 'Select provider';

    arrspec:Specaility[]=[];
    // maps the appropriate column to fields property
    public localFields3: Object = { text: 'name' };
    // set the placeholder to the AutoComplete input
    public localWaterMark3: string = 'Select speciality';


  ngOnInit() {

    this.initialForm = this.fb.group({
        practice: new FormControl(null)

    });

        this._data.getSpeciality().subscribe(
            (data: Specaility[]) => {
                this.arrspec = data;
            }
        );

        this._data.getProvider().subscribe(
            (data: Provider[]) => {
                this.arrprov = data;
            }
        );

        this._data.getLocation().subscribe(
            (data: Location[]) => {
                this.arrloc = data;
                //this.arraylocation = _.toArray(this.arrloc);
                this.arraylocation = this.arrloc["locationList"];
                console.log(this.arraylocation);
            }
        );

        this._data.getPractice().subscribe(
            (data: Practice[]) => {
                this.arrprac = data;
                //this.arraypractice = _.toArray(this.arrprac);
                this.arraypractice=this.arrprac["practiceList"];
                console.log(this.arraypractice);
            }
        );

    }

    openEdit() {
        // this.modalService.open(contents, { size: 'lg' });

        this.schedule=true;


    }

    onClickOD() {
        this.officeDashboard = true;
        this.adjusterDashboard = true;
        this.myCases = true;
    }
    onClickAD() {
        this.adjusterDashboard = false;
        this.officeDashboard = false;
        this.myCases = false;
    }
    onClickMC() {
        this.adjusterDashboard = false;
        this.officeDashboard = false;
        this.myCases = false;

    }

}
