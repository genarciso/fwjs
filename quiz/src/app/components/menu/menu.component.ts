import {Component, EventEmitter, Output} from '@angular/core';
import {ConteudoService} from "../../services/conteudo.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  selecionado: number = 0
  @Output() selecao = new EventEmitter<number>()

  constructor(public conteudoService: ConteudoService) {
  }


}
