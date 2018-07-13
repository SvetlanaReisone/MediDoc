import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericHttpService } from '../../../../shared/services/generic-http.service';
import { Observable, of } from 'rxjs';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})


export class WelcomePageComponent implements OnInit {

  constructor(private _router: Router,
              private _http: GenericHttpService,
              private _storage: Storage) { }

  private  _persoID : number = 0;

  public persons$: Observable<any[]>;
  private _person_deleted : boolean = false;

  ngOnInit() {
    this.loadPersons();
  }

  // authenticate(){
  //   this._http.post('mediSRV_users', '/login' , JSON.stringify({"email":"s.reisone@gmail.com","password":"S"}))
  //   .subscribe(user =>{ 
  //      console.log('User is: ', user._id);
  //      if (user._id) this._storage.set("User_id", user._id)
  //   })
  // }

  loadPersons(){
   // var UserId = this._storage.get("User_id");
   
    this.persons$ = this._http.get('mediSRV_personal', '/mng/5b46f34b5b25350014c20585' );
  }

  Delete(person) : void {
    console.log('TOTOTOTOT');
    // this._http.delete('mediSRV_personal', '/' + person.person_id)
    // .subscribe(person_ =>{ 
    //   console.log('Person '+ person_.person_id + ' deleted');
    // });
    // event.stopImmediatePropagation;
    //this._person_deleted = true;
  }


  EditPersonal(person) : void {
    console.log('::: Go to person detail', person);
    if (!this._person_deleted) {
        if (person===null)
            this._router.navigate(['personal', 0])    
        else     
          this._router.navigate(['personal', person._id])
    }    
  }
}
