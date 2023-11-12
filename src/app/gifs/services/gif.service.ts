import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, Response } from '../interfaces/gif';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private historialGifs: string[] = [];
  private gifBuscado='';
  private listaGifsSeleccionados: Gif[] = [];
  private _endpoint: string = 'http://api.giphy.com/v1/gifs/search?';
  private _apiKey: string = 'xheS4OC4jvqxbPIEDGKHvb84G5OmdCga';
  private _limit: string = '12';
  private _language: string = 'es';

  constructor(private http: HttpClient) {
    this.historialGifs = JSON.parse(localStorage.getItem('busquedas')!) || [];
    this.listaGifsSeleccionados =
      JSON.parse(localStorage.getItem('gif')!) || [];
    this.gifBuscado=this.historialGifs[0];  
  }

  get getHistorialGits() {
    return this.historialGifs;
  }

  get getListaGifsSeleccionados() {
    return this.listaGifsSeleccionados;
  }

  get getGifBuscado(){
    return this.gifBuscado;
  }

  arreglaBuscados(input: string): void {
    input = input.toLowerCase();
    this.historialGifs = this.historialGifs.filter(
      (palabra) => palabra != input
    );

    this.historialGifs.unshift(input);
    if (this.historialGifs.length == 11) {
      this.historialGifs = this.historialGifs.slice(0, 10);
    }
    localStorage.setItem('busquedas', JSON.stringify(this.getHistorialGits));
  }

  // searched2(input: string) {
  //   this.http
  //     .get<Response>(
  //       this._endpoint +
  //         this._apiKey +
  //         this._search +
  //         input +
  //         this._limit +
  //         this._language
  //     )
  //     .subscribe((response) => {
  //       this.listaGifsSeleccionados = response.data;
  //       localStorage.setItem(
  //         'gif',
  //         JSON.stringify(this.listaGifsSeleccionados)
  //       );
  //     });
  //   this.arreglaBuscados(input);
  // }

  searched(input: string) {
    const queryParams = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', this._limit)
      .set('q', input)
      .set('lang', this._language);
    this.http
      .get<Response>(this._endpoint, { params: queryParams })
      .subscribe((response) => {
        this.listaGifsSeleccionados = response.data;
        localStorage.setItem(
          'gif',
          JSON.stringify(this.listaGifsSeleccionados)
        );
      });
      this.gifBuscado=input;
    this.arreglaBuscados(input);
  }
}
