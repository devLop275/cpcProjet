import { Component, OnInit } from '@angular/core';
import { CpcSousClasse } from 'src/app/controller/model/cpc-sous-classe.model';
import { CpcSousClasseService } from 'src/app/controller/service/cpc-sous-classe.service';

@Component({
  selector: 'app-cpc-sous-classe-create',
  templateUrl: './cpc-sous-classe-create.component.html',
  styleUrls: ['./cpc-sous-classe-create.component.scss']
})
export class CpcSousClasseCreateComponent implements OnInit {

  constructor( private cpcSousClasseService : CpcSousClasseService ) { }

  ngOnInit(): void {
  }

  get cpcsousclasse(): CpcSousClasse {
    return this.cpcSousClasseService.cpcsousclasse;
  }

  get cpcsousclasses(): Array<CpcSousClasse>{
    return this.cpcSousClasseService.cpcsousclasses;
  }

  public save(){
    this.cpcSousClasseService.save();
  }

}
