import { Injectable } from '@angular/core';
import { AlertDTO } from '../model/util/alert-dto';
import { AlertType } from '../model/util/alert-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  alerts: AlertDTO[] = new Array();

  public addAlertDTO(dto: AlertDTO): void {
    let alertFound = false;
    this.alerts.forEach(alert => {
      if (alert.type === dto.type) {
        alertFound = true;
        dto.messages.forEach(msg => alert.messages.push(msg));
      }
    });

    if (!alertFound) {
      this.alerts.push(dto);
    }
  }

  public addAlert(alertType: AlertType, messages: string[]): void {
    let alertFound = false;
    this.alerts.forEach(alert => {
      if (alert.type === alertType) {
        alertFound = true;
        messages.forEach(msg => alert.messages.push(msg));
      }
    });

    if (!alertFound) {
      const dto = new AlertDTO();
      dto.type = alertType;
      dto.messages = messages;

      this.addAlertDTO(dto);
    }
  }

  public hasAlerts() {
    return this.alerts.length > 0;
  }

  public clearAlerts(): void {
    this.alerts = new Array();
  }

}
