import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getData() {
    console.log('Przekazanie danych');
  }

  x = 10;

}