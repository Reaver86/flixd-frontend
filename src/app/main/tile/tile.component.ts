import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flixd-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit() {
  }

}
