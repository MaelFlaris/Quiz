import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {
  }

  apiURL = 'https://quizapi.io/api/v1/questions'

  getNFL() {
    return new Promise(resolve => {
      this.http.get(this.apiURL, {headers: new HttpHeaders().set("X-Api-Key","MKidcP5U89U59SZPEaTOYzc51KaLR9ydQvOtzSkW")}).subscribe(data => {
        resolve(data);

      }, err => {
        console.log(err);
      });
    })
    }
}
