import { Component, OnInit } from '@angular/core';
import { TraderService } from '../../services/trader.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  tService : TraderService;
  traders : Trader[];

  constructor(private traderService : TraderService)
  {
    console.log("Delete Component constructed...");
    this.tService = traderService;
  }

  ngOnInit()
  {
    console.log("Delete Initialized constructed...");
    this.tService.getAllTraders().subscribe((traders) => {
      this.traders = traders;
    });
  }

  deleteTrader(trader)
  {
    console.log(trader);
    this.tService.deleteTrader(trader);
    location.reload();
  }

}

interface Trader {
  firstName : string
}