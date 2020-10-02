import { CompteComptable } from './compte-comptable.model';
export class OperationComptable {

    public libelle: String;
    public referenceSociete: String;
    public referenceFacture: String;
    public montant: number;
    public dateOperationComptable: Date;
    public dateSaisie: Date;
    public compteComptable: CompteComptable;

}
/*
private String id;
	private String libelle;
	private String referenceSociete;
	private String referenceFacture;
	private String montant;
	private String montantMin;
	private String montantMax;
	private String dateOperationComptable;
	private String dateOperationComptableMin;
	private String dateOperationComptableMax;
	private String dateSaisie;
	private String dateSaisieMin;
	private String dateSaisieMax;
    private CompteComptableVo compteComptableVo;
    */