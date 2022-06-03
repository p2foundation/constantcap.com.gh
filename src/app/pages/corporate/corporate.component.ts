import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    // console.log('open modal');
    alert('Managers Profile');
    // $('#teams').modal();
  }
}
