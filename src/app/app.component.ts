import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { UserInfo } from 'src/Hero';
import { error } from 'protractor';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  heroesUrl = 'https://localhost:5001/api/weatherforecast/GetThree';
  herosPostUrl = 'https://localhost:5001/api/weatherforecast/PostMethod';
  heroPutUrl = 'https://localhost:5001/api/weatherforecast/PutMethod';

  title: string = 'my hero App';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   observe:'response',
  //   params: new HttpParams({
  //     uid: '1234',
  //     name: ""
  //   })
  // };

  constructor(private http: HttpClient) { }

  ngOnInit() {

    //this.getHttpInstance();
    // this.postHttpInstance();

    //this.putMethod();

  }




  private putMethod() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body: any = JSON.stringify({ id: 20, name: 'Tornado', sex: 1, telephone: '123456789' });
    this.http.put<any>(this.heroPutUrl, body, { headers, observe: 'response' }).subscribe(data => {
      if (data.status === 200) {
        alert(data.body.telephone);
      }
    });
  }

  private postHttpInstance() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body: any = JSON.stringify({ id: 20, name: 'Tornado', sex: 1, telephone: '123456789' });

    this.http.post<any>(this.herosPostUrl, body, { headers, observe: 'response' })
      .pipe(
        catchError(this.handleError)
      ).subscribe(data => {
        if (data.status === 200) {
          alert(data.body.name);
        }
      },error => alert(error));


  }

  private getHttpInstance() {
    let headers = new HttpHeaders();
    //headers = headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    params = params.append('uid', '1001');
    params = params.append('name', 'sun');
    this.http.get(this.heroesUrl, { observe: 'body', params, responseType: 'text' })
      .pipe(
        tap(
          data => console.log(data)
        )
      ).subscribe(data => {
        // if (data.status === 200) {
        //   alert(data.body.id);
        //   alert(data.body.name);
        // }


        alert(data);
      });
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      //console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      error.error);
  };

}


