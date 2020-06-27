import { AlertType } from './alert-type.enum';

export class AlertDTO {
    type: AlertType;
    title: string;
    messages: string[] = new Array();
}
