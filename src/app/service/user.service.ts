/**
 * userInfo Management
 * java version : userVO
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { createHash } from 'crypto-browserify';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    result:any;
    user = new User();
    private _http: Http;

    constructor() { }

    getUsers() {
        return this._http.get("/api/getusers")
            .map(result => this.result = result.json().data);
    }

    //user insert
    insertUser(user) {
        this.user = user;
        console.log('insertuser()', this.user);
        //password 암호화
        this.passwordHash();
        //db insert
    }
    
    //password hash
    passwordHash() {
        /* 
            update(data): data매개변수 해싱
            digest(): encoding방식에 따라서 결과값 가져옴
        */
        this.user.password = createHash('sha256').update(this.user.password).digest('hex');
    }
}
