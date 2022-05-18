import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class NewLogService {
  
  id: string ="12345";

  constructor() { }

  Info(a:string) {

    console.log(a);
    this.id = a;
    console.log("I am new Info log!");
  }
}
