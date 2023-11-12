import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifService: GifService) {}

  get listadoHistoria() {
    return this.gifService.getHistorialGits;
  }

  buscaGif(palabra: string) {
    this.gifService.searched(palabra);
  }
}
