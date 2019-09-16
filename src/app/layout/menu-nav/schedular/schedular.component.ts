import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { PopupOpenEventArgs, EventRenderedArgs, ScheduleComponent, MonthService,
    DayService, WeekService, WorkWeekService, EventSettingsModel, ResizeService,
    DragAndDropService} from '@syncfusion/ej2-angular-schedule';
import { L10n } from '@syncfusion/ej2-base';
import { extend } from '@syncfusion/ej2-base';
import { doctorsEventData } from '../data';
import { Schedule } from './schedule';
import { DataService } from '../data.service';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-schedular',
  templateUrl: './schedular.component.html',
  styleUrls: ['./schedular.component.scss'],
  providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
    encapsulation: ViewEncapsulation.None,
})
export class SchedularComponent implements OnInit {
    @ViewChild('scheduleObj',{static:false})


    selectedIndex: number = 0;
    schedule:boolean=false;
    sche:Schedule[]=[];
arrsche:Schedule[]=[];
    public scheduleObj: ScheduleComponent;

    // private dataManger: DataManager = new DataManager({
    //     url: 'https://98cd4d7a.ngrok.io/api/Patient/GetAppointmentsSchedulerDataBeta?LocationListId=&ProviderListId=&SpecialityList=&AppointmentDate=2019/08/30&AppointmentToDate=2019/08/30&SchedulerView=&CategorySpecialityId=&SpecialityId=&AppointmentRequestId=&MemberId=1114&PracticeListId=81',
    //     adaptor: new WebApiAdaptor,
    //     crossDomain: true
    // });


    public data: object[] = [{
        appointmentId: 2,
        title: 'Paris',
        start: new Date(2018, 1, 15, 10, 0),
        end: new Date(2018, 1, 15, 12, 30),
        isMedicalClearanceDone : false,
        Source: 'London',
        Comments: 'Summer vacation planned for outstation.',
        startdatetime: 'Asia/Yekaterinburg',
        enddatetime: 'Asia/Yekaterinburg'
    }];


    public eventSettings: EventSettingsModel = { };

    public selectedDate: Date = new Date(2018, 1, 15);
    public showQuickInfo: boolean = false;
    public statusFields: Object = { text: 'StatusText', value: 'StatusText' };
    public StatusData: Object[] = [
      { StatusText: 'New', Id: 1 },
      { StatusText: 'Requested', Id: 2 },
      { StatusText: 'Confirmed', Id: 3 }
    ];
    public dateParser(data: string) {
        return new Date(data);
      }
    public onEventRendered(args: EventRenderedArgs): void {
        switch (args.data.EventType) {
            case 'Requested':
                (args.element as HTMLElement).style.backgroundColor = '#F57F17';
                break;
            case 'Confirmed':
                (args.element as HTMLElement).style.backgroundColor = '#7fa900';
                break;
            case 'New':
                (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
                break;
        }
    }
    public onActionBegin(args: { [key: string]: Object }): void {
        if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
            let data: any;
            if (args.requestType === 'eventCreate') {
                data = <any>args.data[0];
            } else if (args.requestType === 'eventChange') {
                data = <any>args.data;
            }
            if (!this.scheduleObj.isSlotAvailable(data.StartTime as Date, data.EndTime as Date)) {
                args.cancel = true;
            }
        }
    }

    constructor( private _data: DataService) { }

  ngOnInit() {
    // this._data.getschedule().subscribe(
    //     (data:Schedule[]) => {
    //         this.sche = data;
    //         //this.arrsche = _.toArray(this.sche);
    //         this.arrsche=this.sche["schedulerAppointments"];
    //             console.log(this.arrsche);
    //     }
    // );

    this._data.getschedule().subscribe(
        (data: any) => {
            this.sche = data["schedulerAppointments"];
            this.arrsche = this.sche;
            console.log(this.sche);
            this.data = this.sche
            this.eventSettings = {
                dataSource: this.data,
                fields: {
                    id: 'appointmentId',
                    subject: { name: 'title' },
                    isAllDay: { name: 'isMedicalClearanceDone' },
                    location: { name: 'caseNumber' },
                    description: { name: 'providerName' },
                    startTime: { name: 'start' },
                    endTime: { name: 'end' },
                    startTimezone: { name: 'startdatetime' },
                    endTimezone: { name: 'enddatetime' }
                }
            };
        }
    );

    // console.log("Data Manager:",this.dataManger);
}

}
