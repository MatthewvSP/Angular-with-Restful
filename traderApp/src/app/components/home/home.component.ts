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
    console.log('Home Component initialized...');
    this.tService.getAllTraders().subscribe((traders) => {
      this.traders = traders;
      console.log(this.traders)
    });
  }
  
  getAllTraders()
  {
    
    console.log('Getting All Traders...');
    this.tService.getAllTraders().subscribe((traders) => {
      this.traders = traders;

      console.log(this.traders)
    });

  }

}

interface Trader {
  firstName : string
}