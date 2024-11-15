interface IProdotto {
  tipo: string; // costume da bagno, pareo, cappello
  id: string;
  taglia: string;
  colore: string;
  stato: "disponibile" | "esaurito";
  assegnaCliente(cliente: ICliente): void;
}
