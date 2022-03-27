import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getData() {
    console.log('Przekazanie danych');
  }

  x = 10;

  mess="wiadomość"
  getData2(){
    return this.mess
  }
  getData3(param){
    param = `${param} oj tam `
    return param;
  }

}