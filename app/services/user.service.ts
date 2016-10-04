import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {user} from './../types/user.type';

@Injectable()
export class UserService {
    API_URL = "http://angular2example.getsandbox.com";

    constructor(private http: Http) { }

    authUser(username, password) {
        return this.http.post(this.API_URL + '/users/auth', {
            username: username,
            password: password
        });
    }

    getUsers() {
        return this.http.get(this.API_URL + '/users');
    }

    getUserById(userId) {
        return this.http.get(this.API_URL + '/users/' + userId);
    }
}