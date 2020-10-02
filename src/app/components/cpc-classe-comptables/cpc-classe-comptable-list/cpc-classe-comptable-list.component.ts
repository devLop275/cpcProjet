import { Component, OnInit } from '@angular/core';
import { CpcClasseComptableService } from 'src/app/controller/service/cpc-classe-comptable.service';
import { CpcClasseComptable } from 'src/app/controller/model/cpc-classe-comptable.model';

@Component({
  selector: 'app-cpc-classe-comptable-list',
  templateUrl: './cpc-classe-comptable-list.component.html',
  styleUrls: ['./cpc-classe-comptable-list.component.scss']
})
export class CpcClasseComptableListComponent implements OnInit {

  constructor( private cpcClasseComptableService: CpcClasseComptableService ) { }

  ngOnInit(): void {
    this.cpcClasseComptableService.findAll();
  }

  get cpcClasseComptables(): Array<CpcClasseComptable>{
    return this.cpcClasseComptableService.cpcClasseComptables;
  }
  
  public update(cpcClasseComptable : CpcClasseComptable) {
    this.cpcClasseComptableService.cpcClasseComptable = this.cpcClasseComptableService.clone(cpcClasseComptable);
  }

  public delete(id: number, i:number){
    this.cpcClasseComptableService.delete(id,i);
  }
}
