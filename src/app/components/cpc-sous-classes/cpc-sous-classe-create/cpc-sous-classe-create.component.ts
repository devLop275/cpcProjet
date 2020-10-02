import { Component, OnInit } from '@angular/core';
import { CpcSousClasse } from 'src/app/controller/model/cpc-sous-classe.model';
import { Cpc } from 'src/app/controller/model/cpc.model';
import { CpcSousClasseService } from 'src/app/controller/service/cpc-sous-classe.service';
import { CpcService } from 'src/app/controller/service/cpc.service';

@Component({
  selector: 'app-cpc-sous-classe-create',
  templateUrl: './cpc-sous-classe-create.component.html',
  styleUrls: ['./cpc-sous-classe-create.component.scss']
})
export class CpcSousClasseCreateComponent implements OnInit {
  
  cpc: Cpc = new Cpc();
  cpcs: Cpc[];


  constructor( private cpcSousClasseService : CpcSousClasseService , private cpcService: CpcService ) { }

  ngOnInit(): void {
    this.getAllCpcs();
  }

  get cpcSousClasse(): CpcSousClasse {
    return this.cpcSousClasseService.cpcSousClasse;
  }

  get cpcSousClasses(): Array<CpcSousClasse>{
    return this.cpcSousClasseService.cpcSousClasses;
  }

  public save(){
    if(this.cpcSousClasseService.cpcSousClasse.id != null){
      this.cpcSousClasseService.update();
     } else{
      this.cpcSousClasseService.save();
      }
    
  }

  public getAllCpcs() {
    this.cpcService.getAllCpcs().subscribe(
      data => {
        this.cpcs = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public onOptionsSelectedem(value: Cpc) {
    console.log(value);
  }
}
