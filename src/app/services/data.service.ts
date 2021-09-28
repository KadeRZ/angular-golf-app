import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Player } from '../interfaces/player';
@Injectable({
    providedIn: 'root',
  })

  export class DataService {

    constructor(private http: HttpClient) {}

    gameObject: Player

    getGameObject() {
      return this.gameObject
    }

    setGameObject(x: any): void {
      this.gameObject = x
    }
  }