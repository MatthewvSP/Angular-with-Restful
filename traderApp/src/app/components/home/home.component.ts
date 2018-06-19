import { Component, OnInit, ViewRef } from '@angular/core';
import { TraderService } from '../../services/trader.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  newTrader:Trader;
  traders:Trader[];
  tService:TraderService;

  constructor(private traderService: TraderService) {
    console.log('Home Component constructed...')
    this.tService = traderService;
   }

  ngOnInit() {
    console.log('Home Component initialized...')

    
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
  
  getAllTraders()
  {
    
    console.log('Getting All Traders...');
    this.tService.getAllTraders().subscribe((traders) => {
      this.traders = traders});
    try{      
      var json = JSON.stringify(this.traders);
      json = JSON.parse(json);
      console.log(json);
      console.log(json["Traders"][0].firstName);
    }  
    catch (e)
    {
      console.log(e);
    }
    
  }

}

interface Trader {
  firstName : string
}