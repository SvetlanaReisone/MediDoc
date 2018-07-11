import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {IPersonal} from '../../../../models/personal';


@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _modalController: ModalController
  ) { 

  }

  public Person : IPersonal;

  ngOnInit() {
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

 goPersonalTreatment(personID : string) {
  console.log(' treatment personID: ', personID);
  this._router.navigate(['treatment', personID]);
 }

 goPost(post): void {
  console.log('::: Go to post detail', post);
  this._router.navigate(['posts', post.id]);
}

  displayDismissData(data) {
    console.log('Modal PersonalMedications closing...', data);
  }

}
