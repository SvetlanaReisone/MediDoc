import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericHttpService } from '../../../../shared/services/generic-http.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private _router: Router,
              private _http: GenericHttpService) { }

  private  _persoID : number = 0;

  public persons$: Observable<any[]>;

  ngOnInit() {
    this.loadPersons();
  }

  loadPersons(){
    this.persons$ = this._http.get('mediSRV_personal', '');
  }

  EditPersonal(person) : void {
    //console.log('Go to personal: ', this._persoID);
    //this._router.navigate(['/personal/' + this._persoID]);
    console.log('::: Go to person detail', person);
    if (person===null)
        this._router.navigate(['personal', 0])    
    else     
      this._router.navigate(['personal', person._id])
  }
}
