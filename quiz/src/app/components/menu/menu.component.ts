import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  selecionado: number = 0
  @Input() conteudos: [{titulo: string, conteudo:string}] = []
  @Output() selecao = new EventEmitter<number>()

  constructor() { }


}
