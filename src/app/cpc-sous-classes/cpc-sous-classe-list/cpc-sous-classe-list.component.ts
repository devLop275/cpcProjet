import { Component, OnInit } from '@angular/core';
import { CpcSousClasseService } from 'src/app/controller/service/cpc-sous-classe.service';
import { CpcSousClasse } from 'src/app/controller/model/cpc-sous-classe.model';

@Component({
  selector: 'app-cpc-sous-classe-list',
  templateUrl: './cpc-sous-classe-list.component.html',
  styleUrls: ['./cpc-sous-classe-list.component.scss']
})
export class CpcSousClasseListComponent implements OnInit {

  constructor( private cpcSousClasseService: CpcSousClasseService ) { }

  ngOnInit(): void {
    this.cpcSousClasseService.findAll();
  }

  get cpcsousclasses(): Array<CpcSousClasse>{
    return this.cpcSousClasseService.cpcsousclasses;
  }
  
  public delete(id: number, i:number){
    this.cpcSousClasseService.delete(id,i);
  }

  //private clone(cpc: Cpc){
    //const myClone = new Cpc();
    //myClone.dateDebut = cpc.dateDebut;
    //myClone.dateFin = cpc.dateFin;
    //myClone.montant = cpc.montant;
    //myClone.referenceSociete = cpc.referenceSociete;
    //myClone.totalCharge = cpc.totalCharge;
    //myClone.totalProduit = cpc.totalProduit;
    //myClone.resultat = cpc.resultat;

    //return myClone;
  //}
}
