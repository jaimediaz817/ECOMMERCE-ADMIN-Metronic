import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { 
  URL_SERVICIOS,
  ENDPOINT_REGISTER_USER_ADMIN,
  ENDPOINT_EDIT_USER_ADMIN,
  ENDPOINT_DELETE_USER_ADMIN,
  ENDPOINT_ALL_USERS_ADMIN
} from 'src/app/config/config';
import { AuthService } from '../../auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  
  constructor(
    private http: HttpClient,
    public authservice: AuthService,
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  allUsers(page=1,state='',search='') {

    this.isLoadingSubject.next(true);

    let headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.authservice.token}`
    });

    let LINK = "";

    if(state){
      LINK = LINK + "&state="+state;
    }

    if(search){
      LINK = LINK + "&search="+search;
    }

    let URL = URL_SERVICIOS + ENDPOINT_ALL_USERS_ADMIN + "?page="+page+LINK;
    return this.http.get(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  register(data:any){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.authservice.token}`
    });

    let URL = URL_SERVICIOS + ENDPOINT_REGISTER_USER_ADMIN;

    return this.http.post(
      URL,
      data,
      { headers: headers }).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  update(user_Id, data) {

    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.authservice.token}`
    });

    let URL = URL_SERVICIOS + ENDPOINT_EDIT_USER_ADMIN + user_Id;

    return this.http.put(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  deleteUser(user_Id){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.authservice.token}`
    });

    let URL = URL_SERVICIOS + ENDPOINT_DELETE_USER_ADMIN + user_Id;

    return this.http.delete(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}
