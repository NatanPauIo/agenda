import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Contato } from '../contato';
import { Tipo } from '../tipo';

@Component({
  selector: 'app-adiciona-contato',
  imports: [DatePipe],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss',
})
export class AdicionaContato {
  contatos: Contato[] = [];
  // Disponibiliza os valores do Enum para usar no selectdo  HTML se desejar
  tiposContato = Object.values(Tipo);

  adicionarContato(nome: string, telefone: string, email: string, nascimento: string, tipo: string) {
    const dataConvertida = new Date(nascimento + 'T00:00:00');
    const tipoConvertido = tipo as Tipo;

    const novoContato = new Contato(
      nome,
      telefone,
      email,
      dataConvertida,
      tipoConvertido
    );

    this.contatos.push(novoContato);
  }
}