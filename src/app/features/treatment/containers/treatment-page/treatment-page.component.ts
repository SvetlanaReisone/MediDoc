import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from "@angular/common";

@Component({
  selector: 'app-treatment-page',
  templateUrl: './treatment-page.component.html',
  styleUrls: ['./treatment-page.component.css']
})
export class TreatmentPageComponent implements OnInit {

  constructor(
    private _router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
  }

  back() {
    this._location.back();
  }

}
