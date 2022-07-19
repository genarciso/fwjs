import {Component} from '@angular/core';
import {ConteudoAba} from "../../services/conteudo.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  conteudos: ConteudoAba[] = []
  abaSelecionada: number = 0


  constructor() {
    this.conteudos.push({
      titulo: "Tab 1",
      conteudo: "Conteudo 1",
      aba: 0
    }, {
      titulo: "Tab 2",
      conteudo: "Conteudo 2",
      aba: 0
    } )
  }

  select(optionIndex: number) {
    this.abaSelecionada = optionIndex
  }

}
