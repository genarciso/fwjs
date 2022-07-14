import {Component, Input} from '@angular/core';
import {ConteudoService} from "../../services/conteudo.service";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  @Input() aba: number = 0

  constructor(public conteudoService: ConteudoService) {
  }
}
