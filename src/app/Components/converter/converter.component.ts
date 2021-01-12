import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  text: string;
  value: string;

  constructor() { }

  ngOnInit(): void {
  }

  Convert(value: string): void{
    this.value = '';
    let i;
    for (i = 0; i < value.length; i++) {
      let char = '';

      if (i % 2 === 0) {
        char = value.charAt(i).toUpperCase();
      }else {
        char = value.charAt(i).toLowerCase();
      }
      this.value += char;
    }
  }
}
