import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,"RAILA",'Unity key in achieving economic prosperity','BABA', new Date(2021,10,9)),
    new Quote(2,"RUTO",'Bottom up economic model','SAMOI', new Date(2021,10,9)),
    new Quote(3,"KALONZO",'Uchumi maradufu economic model','MUSYOKA', new Date(2021,3,9)),
    new Quote(4,"MUSALIA",'Uchumi bora economic model','MUDAVADI', new Date(2021,10,9)),

  ];

  toggleDetails(index: number){
    this.quotes[index].showAuthorName= !this.quotes[index].showAuthorName;
  }

  deleteQuote(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote by ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index,1);
      }
    }
  }
  addNewQuote (quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.submitDate = new Date(quote.submitDate)
    this.quotes.push(quote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
