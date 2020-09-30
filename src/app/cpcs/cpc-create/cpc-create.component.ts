import { Component, OnInit } from '@angular/core';
import { CpcService } from 'src/app/controller/service/cpc.service';
import { Cpc } from 'src/app/controller/model/cpc.model';

@Component({
  selector: 'app-cpc-create',
  templateUrl: './cpc-create.component.html',
  styleUrls: ['./cpc-create.component.scss']
})
export class CpcCreateComponent implements OnInit {

  constructor( private cpcService: CpcService ) { }

  ngOnInit(): void {
  }

  get cpc(): Cpc {
    return this.cpcService.cpc;
  }

  get cpcs(): Array<Cpc>{
    return this.cpcService.cpcs;
  }

  public save(){
    this.cpcService.save();
  }
}
