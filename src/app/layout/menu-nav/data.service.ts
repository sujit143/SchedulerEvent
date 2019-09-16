import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    urlspec: string = "https://f615b77e.ngrok.io/api/Speciality/GetSpecialities";
    urlprac: string ="https://f615b77e.ngrok.io/api/Practice/ManageUsers?MemberId=1114";
    urlloc:string="https://f615b77e.ngrok.io/api/Location/GetPracticeLocationsForCreateUser?PracticeId=81&MemberId=1114";
    urlprov: string ="https://f615b77e.ngrok.io/api/Provider/GetLocationProvidersForMultiplePracticeLocations?PracticeId=81&LocationListId=149&MemberId=1114";
    urlsche:string="https://f615b77e.ngrok.io/api/Patient/GetAppointmentsSchedulerDataBeta?LocationListId=&ProviderListId=&SpecialityList=&AppointmentDate=2019/08/30&AppointmentToDate=2019/08/30&SchedulerView='day'&CategorySpecialityId=&SpecialityId=&AppointmentRequestId=&MemberId=1114&PracticeListId=81"
    constructor(private _http:HttpClient) { }

    getSpeciality() {
        return this._http.get(this.urlspec);
    }
    getProvider() {
        return this._http.get(this.urlprov);
    }
    getLocation() {
        return this._http.get(this.urlloc);
    }
    getPractice() {
        return this._http.get(this.urlprac);
    }
    getschedule(){
        return this._http.get(this.urlsche);
      }
     }

