

export class Cartes {
  valeur: string;
  genre: string;
  path: string;
  etat: string;
  constructor(_val: string, _genre: string, _path: string, _etat) {
    this.genre = _genre;
    this.path = _path;
    this.valeur = _val;
    this.etat = _etat;
  }
}
