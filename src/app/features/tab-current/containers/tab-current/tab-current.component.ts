import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../shared/services/storage.service';


@Component({
  selector: 'app-tab-current',
  templateUrl: './tab-current.component.html',
  styleUrls: ['./tab-current.component.css']
})
export class TabCurrentComponent implements OnInit {

  constructor(
    private _storage: StorageService
  ) { }

  ngOnInit() {
    this._storage.set('User', 'Svetlana')
  }

}
