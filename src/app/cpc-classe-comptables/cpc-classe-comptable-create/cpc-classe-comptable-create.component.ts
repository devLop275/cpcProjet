import { Component, OnInit } from '@angular/core';
import { CpcClasseComptable } from 'src/app/controller/model/cpc-classe-comptable.model';
import { CpcClasseComptableService } from 'src/app/controller/service/cpc-classe-comptable.service';

@Component({
  selector: 'app-cpc-classe-comptable-create',
  templateUrl: './cpc-classe-comptable-create.component.html',
  styleUrls: ['./cpc-classe-comptable-create.component.scss']
})
export class CpcClasseComptableCreateComponent implements OnInit {

  constructor(private cpcClasseComptableService: CpcClasseComptableService) { }

  ngOnInit(): void {
  }

  get cpcclassecomptable(): CpcClasseComptable {
    return this.cpcClasseComptableService.cpcClasseComptable;
  }

  get cpcclassecomptables(): Array<CpcClasseComptable>{
    return this.cpcClasseComptableService.cpcClasseComptables;
  }

  public save(){
    this.cpcClasseComptableService.save();
  }

}
