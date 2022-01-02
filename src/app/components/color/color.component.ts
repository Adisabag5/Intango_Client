import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  @Input() color: any;
  @Input() max_votes: any;

  pb_size: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.max_votes)
    console.log(this.color)
    this.calculateProgressbarSize();
    
  }

  calculateProgressbarSize()
  {
    this.pb_size = 200 * (this.color.votes / this.max_votes);
  }

}
