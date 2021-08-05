import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
})
export class BlankPage {

  constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
