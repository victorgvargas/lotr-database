import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
  response = [];
  loader : boolean = true;

  constructor(private getData : GetDataService) { }

  ngOnInit() {
    this.loader = true;
    this.getData.getChapter().subscribe(res => {
      console.log(res);
      this.loader = false;
    })
  }

}
