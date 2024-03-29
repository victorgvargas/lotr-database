import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }


  searchInput: FormGroup;

  ngOnInit() {
    this.searchInput = new FormGroup({
      search : new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.searchInput);
  }
}
