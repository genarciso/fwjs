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

  constructor() { }


}
