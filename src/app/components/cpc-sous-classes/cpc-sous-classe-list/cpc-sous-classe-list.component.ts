import { Component, OnInit } from '@angular/core';
import { CpcSousClasse } from 'src/app/controller/model/cpc-sous-classe.model';
import { CpcSousClasseService } from 'src/app/controller/service/cpc-sous-classe.service';

@Component({
  selector: 'app-cpc-sous-classe-list',
  templateUrl: './cpc-sous-classe-list.component.html',
  styleUrls: ['./cpc-sous-classe-list.component.scss']
})
export class CpcSousClasseListComponent implements OnInit {

  constructor( private cpcSousClasseService: CpcSousClasseService) { }

  ngOnInit(): void {
    this.cpcSousClasseService.findAll();
  }

  get cpcSousClasses(): Array<CpcSousClasse>{
    return this.cpcSousClasseService.cpcSousClasses;
  }
  
  public delete(id: number, i:number){
    this.cpcSousClasseService.delete(id,i);
  }
  
  public update(cpcSousClasse: CpcSousClasse) {
    this.cpcSousClasseService.cpcSousClasse = this.cpcSousClasseService.clone(cpcSousClasse);
  }
}
