import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import {Personal} from '../../../../models/personal';
import {Treatment} from '../../../../models/treatment';
import { Location } from '@angular/common';
import { GenericHttpService } from '../../../../shared/services/generic-http.service';



@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _modalController: ModalController,
    private _location: Location, 
    private _http: GenericHttpService
  ) { 

  }

   @Input() person : Personal;
   treatment : Treatment[];
   treatment$ : Observable<Treatment[]>

  ngOnInit() {
    if (this._route.snapshot.params.personid == 0){this.person = new Personal };
    this.getPerson();
    this.getTreatment();
  }

  getPerson(): void {
    this._http.get('mediSRV_personal', '/' + this._route.snapshot.params.personid)
      .subscribe(person_ =>{ 
        this.person = person_ ;
      }); 
  }
  
  getTreatment() {
    this.treatment$ = this._http.get('mediSRV_treatment', '/' + this._route.snapshot.params.personid);
  } 
  
  
      /* show modal personal medications form not working for the moment 

  async goPersonalMedications(personID: string) {
    console.log('personID', personID);
    const modal = await this._modalController.create({
      component: MedicationsPageComponent,
      componentProps: {
        person: {
          id: personID
        }
      }
    });
    // check on modal is dismiss
    modal.onDidDismiss(data => this.displayDismissData(data));
    // open modal
    return await modal.present();
  }

  */

 back(){
    this._location.back();
 } 

 save(){
  

   console.log('Person modified: ', this.person);
   let pJSn = JSON.stringify(this.person);
   console.log('post data: ', pJSn)
   if (this._route.snapshot.params.personid == 0 ) {
      this.person.user_id = '5b46f34b5b25350014c20585';
      this._http.post('mediSRV_personal', '/' , JSON.stringify(this.person))
      .subscribe(person_ =>{ 
        this.person = person_ ;
      })
    }
      else  {
        console.log('Updating user ', this.person);
        this._http.updateFields('mediSRV_personal', '/' + this._route.snapshot.params.personid , JSON.stringify(this.person))
        .subscribe(person_ =>{ 
          this.person = person_ ;
        })
      }
      this.back();
 }

 goPersonalTreatment(personID : string) {
  console.log(' treatment personID: ', personID);
  this._router.navigate(['treatment', personID]);
 }


}
