import { Tipo } from './tipo';

export class Contato {
  private _nome: string;
  private _telefone: string;
  private _email: string;
  private _aniversario: Date;
  private _tipo: Tipo;

  constructor(nm: string, tel: string, email: string, data: Date, tp: Tipo) {
    this._nome = nm;
    this._telefone = tel;
    this._email = email;
    this._aniversario = data;
    this._tipo = tp;
  }


  public get nome(): string {
    return this._nome;
  }
  public set nome(valor: string) {
    this._nome = valor;
  }

  public get telefone(): string {
    return this._telefone;
  }
  public set telefone(valor: string) {
    this._telefone = valor;
  }

  public get email(): string {
    return this._email;
  }
  public set email(valor: string) {
    this._email = valor;
  }

  public get aniversario(): Date {
    return this._aniversario;
  }
  public set aniversario(valor: Date) {
    this._aniversario = valor;
  }

  public get tipo(): Tipo {
    return this._tipo;
  }
  public set tipo(valor: Tipo) {
    this._tipo = valor;
  }
}