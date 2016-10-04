import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {activity} from './../types/activity.type';

@Injectable()
export class ActivityService {
    API_URL = "http://angular2example.getsandbox.com";

    constructor(private http: Http) { }

    getActivities() {
        return this.http.get(this.API_URL + '/activities');
    }

    getActivityById(activityId) {
        return this.http.get(this.API_URL + '/activities/' + activityId);
    }
}