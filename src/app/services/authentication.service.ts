import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username: any, password: any) {
 
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('http://localhost:8888/basicauth', { headers }).pipe(
      map(
        (userData:any) => {
          let basicToken = 'Basic ' + btoa(username + ':' + password ) 
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('name', userData["name"]);
          sessionStorage.setItem('lastName', userData["lastName"]);
          sessionStorage.setItem('basicToken', basicToken);
         // console.log(username + " " + password);
         console.log(userData);
          return userData;
        }
      )


    );


  }

  isUserLoggedIn() {
    let basicToken = sessionStorage.getItem('basicToken')
    //console.log(!(user === null))
    return !(basicToken === null) 
  }
  logOut() {
    sessionStorage.removeItem('basicToken')
  }
}
