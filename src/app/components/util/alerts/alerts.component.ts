import { Component, OnInit } from '@angular/core';
import { AlertDTO } from 'src/app/model/util/alert-dto';
import { listenerCount } from 'process';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(private service: AlertsService) { }

  hasAlerts = false;

  alerts: AlertDTO[] = new Array();

  ngOnInit(): void {
    this.alerts = this.service.alerts;
  }

}
