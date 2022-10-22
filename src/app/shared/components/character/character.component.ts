import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  response = [];
  loader = false;

  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.getData.getCharacter().subscribe( res => {
      console.log(res);
    });
  }

}
