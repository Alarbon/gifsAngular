import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-searh-box',
  templateUrl: './searh-box.component.html',
})
export class SearhBoxComponent {
  @ViewChild('textToSearch') tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) {}
  searched() {
    let palabraBuscada = this.tagInput.nativeElement.value;
    if (palabraBuscada.trim().length != 0) {
      this.gifService.searched(palabraBuscada);
    }
  
    
    this.tagInput.nativeElement.value = '';
  }
}
