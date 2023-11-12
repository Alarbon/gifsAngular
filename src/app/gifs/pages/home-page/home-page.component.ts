import { Component } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Gif, Response } from '../../interfaces/gif';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifService: GifService) {}

  get getGifService(): Gif[] {
    return this.gifService.getListaGifsSeleccionados;
  }
  get getGifBuscado(): string {
    return this.gifService.getGifBuscado;
  }
}
