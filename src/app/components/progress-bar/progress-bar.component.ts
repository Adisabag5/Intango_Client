import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() pb_size: number = 0;
  color: ThemePalette = 'primary';

  constructor() { }

  ngOnInit(): void {
    console.log(this.pb_size)
  }

}
