import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class OldLogService {
  id: string;
  constructor() { }

  Info(a:string) {
    console.log("I am old Info log!");
  }
  
}
