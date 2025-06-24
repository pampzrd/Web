import { Component } from '@angular/core';
import {TituloComponent}from './titulo/titulo.component';
import {ConteudoComponent} from "./conteudo/conteudo.component";
import {MenuComponent} from "./menu/menu.component";
import {GaleriaComponent} from "./galeria/galeria.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Kuutei';
}
