import { Component, OnInit } from '@angular/core';
import { TraderService, Trader } from '../../services/trader.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  tService:TraderService;

  constructor(private traderService : TraderService)
  {
    console.log("Insert Component constructed...");
    this.tService = traderService;
  }

  ngOnInit() 
  {
    console.log("Insert Component initialized...");
  }


  submitTrader(firstNameInput)
  {
    if (firstNameInput != "")
    {
      console.log(firstNameInput);


      this.tService.insertTrader(firstNameInput);

    }
    else
    {
      console.log('First Name Input is empty...')
    }
    
  }

}
