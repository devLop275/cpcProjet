import { Component, OnInit } from '@angular/core';
import { CpcService } from 'src/app/controller/service/cpc.service';
import { Cpc } from 'src/app/controller/model/cpc.model';

@Component({
  selector: 'app-cpc-list',
  templateUrl: './cpc-list.component.html',
  styleUrls: ['./cpc-list.component.scss']
})
export class CpcListComponent implements OnInit {

  constructor( private cpcService: CpcService ) { }

  ngOnInit(): void {
    this.cpcService.findAll();
  }

  get cpcs(): Array<Cpc>{
    return this.cpcService.cpcs;
  }
  
  public delete(id: number, i:number){
    this.cpcService.delete(id,i);
  }

  
  
}
