export interface Transaction {
  id: number;
  idClient: number;
  libelle: string;
  date: Date;
  montant: number;
  type: string;
  beneficaire: string;
}
