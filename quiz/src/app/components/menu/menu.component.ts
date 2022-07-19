import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ConteudoAba} from "../../services/conteudo.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  selecionado: number = 0
  @Input() conteudos: ConteudoAba[] = []
  @Output() selecao = new EventEmitter<number>()

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


}
