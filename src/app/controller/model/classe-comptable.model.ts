import { SousClasseComptable } from './sous-classe-comptable.model';
export class ClasseComptable {

    public id:number;
    public numero:number;
    public libelle:String;
    public sousClasseComptablesVo:SousClasseComptable[];

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