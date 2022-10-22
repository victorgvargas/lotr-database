import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  response = [];
  loader = false;

  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.loader = true;
    this.getData.getQuote().subscribe(
      res => {
        console.log(res);
        this.response = res.docs;
        console.log(this.response);
        this.loader = false;
      }
    );
  }

}
