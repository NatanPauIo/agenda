import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionaContato } from './adiciona-contato/adiciona-contato';

@Component({
  imports: [RouterOutlet, AdicionaContato],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('agenda');
}
