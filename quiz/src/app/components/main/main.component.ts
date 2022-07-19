import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  conteudos = [{
    titulo: "Tab 1",
    conteudo: "Conteudo 1"
  }, {
    titulo: "Tab 2",
    conteudo: "Conteudo 2"
  }]
  abaSelecionada: number = 0


  constructor() {}

  select(optionIndex: number) {
    this.abaSelecionada = optionIndex
  }

}
