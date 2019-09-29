import { Quotes } from './../interfaces/quote';
import { QuotesService } from './../quotes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor(private quoteservice:QuotesService) { }

  quotes:Quotes[];

  ngOnInit() {
    this.getAnotherQuote()
  }

  getAnotherQuote(){
    this.quoteservice.getQuote().subscribe( quote => this.quotes = quote)
  }
}
