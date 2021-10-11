import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,"RAILA",'Unity key in achieving economic prosperity--- An economic model is a simplified description of reality, designed to yield hypotheses about economic behavior that can be tested. ... Economic models generally consist of a set of mathematical equations that describe a theory of economic behavior.','BABA', new Date(2021,10,9)),
    new Quote(2,"RUTO",'Bottom up economic model---An economic model is a simplified description of reality, designed to yield hypotheses about economic behavior that can be tested. ... Economic models generally consist of a set of mathematical equations that describe a theory of economic behavior.','SAMOI', new Date(2021,10,9)),
    new Quote(3,"KALONZO",'Uchumi maradufu economic model---An economic model is a simplified description of reality, designed to yield hypotheses about economic behavior that can be tested. ... Economic models generally consist of a set of mathematical equations that describe a theory of economic behavior.','MUSYOKA', new Date(2021,3,9)),
    new Quote(4,"MUSALIA",'Uchumi bora economic model---An economic model is a simplified description of reality, designed to yield hypotheses about economic behavior that can be tested. ... Economic models generally consist of a set of mathematical equations that describe a theory of economic behavior.','MUDAVADI', new Date(2021,10,9)),

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
