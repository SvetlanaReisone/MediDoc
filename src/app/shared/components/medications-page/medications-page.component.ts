import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-medications-page',
  templateUrl: './medications-page.component.html',
  styleUrls: ['./medications-page.component.css']
})
export class MedicationsPageComponent implements OnInit {

  constructor(
    private _modalController: ModalController
  ) { }

  ngOnInit() {
 
  }

}
