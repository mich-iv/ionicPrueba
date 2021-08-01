import { Component } from '@angular/core';
import { IonRefresher, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController) {}

  abrirPrimero() {
    this.menu.enable(true, 'primerMenu');
    this.menu.open('primerMenu');
  }
  abrirFinal() {
    this.menu.open('end');
  }
  abrirPersonalizado() {
    this.menu.enable(true, 'personalizado');
    this.menu.open('personalizado');
  }
}

class Refresco {

  constructor() {}

  variable: string = "";
  variable1: string = "";

  refresh() {
    this.variable1 = this.variable;
  }
}

let clase = new Refresco();



