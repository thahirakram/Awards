import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {
  addform=[];

  addresses = [];

  constructor() { }

  ngOnInit() {
  } 
  temp(form) {
    console.log(form.value)
  }
  addAddress() {
    this.addresses.push({})
  }
}
