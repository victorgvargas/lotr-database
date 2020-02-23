import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  response = [];
  loader : boolean = false;

  constructor(private getData : GetDataService) { }

  ngOnInit() {
    this.loader = true;
    this.getData.getBook().subscribe(res => {
      this.response = res.docs;
      console.log(this.response);
      this.loader = false;
    })
  }

}
