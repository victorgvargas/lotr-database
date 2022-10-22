import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  response = [];
  loader = false;

  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.loader = true;
    this.getData.getMovie().subscribe(
      res => {
        this.response = res.docs;
        console.log(this.response);
        this.loader = false;
      }
    );
  }

}
