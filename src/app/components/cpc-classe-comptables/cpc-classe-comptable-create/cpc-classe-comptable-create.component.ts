import { Component, OnInit } from '@angular/core';
import { CpcClasseComptable } from 'src/app/controller/model/cpc-classe-comptable.model';
import { CpcSousClasse } from 'src/app/controller/model/cpc-sous-classe.model';
import { CpcClasseComptableService } from 'src/app/controller/service/cpc-classe-comptable.service';
import { CpcSousClasseService } from 'src/app/controller/service/cpc-sous-classe.service';

@Component({
  selector: 'app-cpc-classe-comptable-create',
  templateUrl: './cpc-classe-comptable-create.component.html',
  styleUrls: ['./cpc-classe-comptable-create.component.scss']
})
export class CpcClasseComptableCreateComponent implements OnInit {

  constructor(private cpcClasseComptableService: CpcClasseComptableService, private cpcSousClasseService: CpcSousClasseService) { }
   
  cpcSousClasse: CpcSousClasse = new CpcSousClasse();
  cpcSousClasses: CpcSousClasse[];


  ngOnInit(): void {
    this.getAllCpcSousClasses();
  }

  get cpcClasseComptable(): CpcClasseComptable {
    return this.cpcClasseComptableService.cpcClasseComptable;
  }

  get cpcClasseComptables(): Array<CpcClasseComptable>{
    return this.cpcClasseComptableService.cpcClasseComptables;
  }

  public save(){
    if(this.cpcClasseComptableService.cpcClasseComptable.id != null){
      this.cpcClasseComptableService.update();
    } else {
      this.cpcClasseComptableService.save();
    }
   
  }
  

  public getAllCpcSousClasses() {
    this.cpcSousClasseService.getAllCpcSousClasses().subscribe(
      data => {
        this.cpcSousClasses = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public onOptionsSelectedem(value: CpcSousClasse) {
    console.log(value);
  }

}
