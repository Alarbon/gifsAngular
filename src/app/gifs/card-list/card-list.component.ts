import { Component, Input } from '@angular/core';
import { Gif } from '../interfaces/gif';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',

})
export class CardListComponent {
  @Input() listaGif: Gif[] = [];
  @Input() gifBuscado: string = '';
}
