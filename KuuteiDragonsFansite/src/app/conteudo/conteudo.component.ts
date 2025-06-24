import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  constructor() { }

  TituloReceita:string='Diário de Bordo #1: /n Dia tranquilo na Quin Zaza';
  urlImagem:string='./assets/imgs/galera1.png';
  altImagem:string='Mika está comendo a comida da tropa. Eles estão avançando nele para tomar a comida.';
  ingredientes:string='O Mika andou roubando comida denovo! A Takita ficou brava e o restante da tripulação correu atrás dele.';
  preparo:string=`Vanabelle estava observando as nuvens.
  Jiro avistou um dragão raro em algumas milhas de distância. `;

  ngOnInit(): void {
  }

}
