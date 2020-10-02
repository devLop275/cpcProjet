import { SousClasseComptable } from './sous-classe-comptable.model';
import { CpcClasseComptable } from './cpc-classe-comptable.model';
export class ClasseComptable {

    public id:number;
    public numero:number;
    public libelle:String;
    public sousClasseComptables:SousClasseComptable[];
    public cpcClasseComptables:CpcClasseComptable[];

    constructor(){
        
    }
    
}
/*
private String id ;
private String numero;
private String numeroMin ;
private String numeroMax ;
private String libelle ;
private List<SousClasseComptableVo>sousClasseComptablesVo;
*/