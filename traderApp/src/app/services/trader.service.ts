import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface Trader {
  firstName: string;
}
@Injectable({
  providedIn : 'root'
})
export class TraderService {
  
  constructor(private http:Http) {
    console.log ('Data Service connected...');
  }

  public getAllTraders() {
    return this.http.get('//localhost:8000/api/traders/')
    .pipe(map ( res => res.json()));
}

  public insertTrader(newTrader:string)
  {
    console.log("Trying to insert: " + newTrader);
    return this.http.post('//localhost:8000/api/traders/', {firstName : newTrader}).subscribe(
      res => {
        console.log("Responded Correctly...")
        console.log(res);
      },
      err => {
        console.log("error Occured");
      }
    );
    
  }
   
  
  
}
