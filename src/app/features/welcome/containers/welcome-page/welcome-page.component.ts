import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private _router: Router) { }

  private  _persoID : number = 0;

  ngOnInit() {
  }

  EditPersonal() : void {
    console.log('Go to personal: ', this._persoID);

    this._router.navigate(['/personal/' + this._persoID]);
  }

}
