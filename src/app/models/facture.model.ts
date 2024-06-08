  export interface Facture {
    id: number;
    factref: string;
    month: number;
    echeance: Date;
    montant:number;
    clientid?: any;
    datepaiement?: any;
    statusfacture: string;
  }
  