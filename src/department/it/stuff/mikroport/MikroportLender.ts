import {User} from '../../../../user/User';
import {ITDepartment} from '../../ITDepartment';
import {MikroportBookingJiraIssueRequestSender} from './MikroportBookingJiraIssueRequestSender';

export class MikroportLender {

    constructor(private itDepartment:ITDepartment,
                private mikroportBookingJiraIssueRequestSender:MikroportBookingJiraIssueRequestSender) {
    }

    public bookMicroportFor(user:User, date:Date):void {
        return null;
    }

}