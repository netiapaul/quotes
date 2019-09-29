import { Quotes } from './interfaces/quote';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor( private http:HttpClient) { }

  private quotesURL='https://breaking-bad-quotes.herokuapp.com/v1/quotes';

  getQuote():Observable<Quotes[]>{
    return this.http.get<Quotes[]>(this.quotesURL)
  }
}
