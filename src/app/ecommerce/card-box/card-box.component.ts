import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.scss']
})
export class CardBoxComponent implements OnInit{


  @Input() card_background: { [key: string]: any } = {};
  @Input() header_text: string = "header_text";
  @Input() header_style: { [key: string]: any } = {};
  @Input() historic_text: string = "(historic_text)";
  @Input() historic_style: { [key: string]: any } = {};
  @Input() amount: number = 0
  @Input() amount_style: { [key: string]: any } = {};
  @Input() percent: number = 0
  @Input() percent_background: string = '#47f52b';
  @Input() currency_type : string = 'INR'


  constructor(){}


  ngOnInit(): void {
  }
}
