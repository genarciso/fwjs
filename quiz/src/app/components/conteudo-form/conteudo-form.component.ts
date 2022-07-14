import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ConteudoAba, ConteudoService, PainelInfo} from "../../services/conteudo.service";

@Component({
  selector: 'app-conteudo-form',
  templateUrl: './conteudo-form.component.html',
  styleUrls: ['./conteudo-form.component.css']
})
export class ConteudoFormComponent implements OnInit {
  painelInfo: PainelInfo = new PainelInfo();
  qtdConteudos: number[] = [0]
  @ViewChild("conteudoForm") form!: NgForm

  constructor(private conteudoService: ConteudoService) {
    this.qtdConteudos = Array(this.painelInfo.qtdAbas).fill(1).map((x,i)=>i++);
  }

  ngOnInit(): void {
  }

  mudarQtdAbas() {
    this.qtdConteudos = Array(this.painelInfo.qtdAbas).fill(1).map((x,i)=>i++);
    if (this.painelInfo.abas.length < this.painelInfo.qtdAbas) {
      this.painelInfo.abas.push(new ConteudoAba())
    } else if (this.painelInfo.abas.length > this.painelInfo.qtdAbas){
      this.painelInfo.abas.pop()
    }
  }

  submit() {
    let abasCadastradas: ConteudoAba[]  = Object.entries(this.form.value).map(item => {
      if (item[0].startsWith("abas-")) {
        return item[1] as ConteudoAba
      }
      return
    }).filter(item => item) as ConteudoAba[]
    abasCadastradas.forEach((aba, index) => aba.aba = index)
    this.conteudoService.add({
      abas: abasCadastradas,
      qtdAbas: this.painelInfo.qtdAbas
    } as PainelInfo)

    this.form.resetForm()
    this.painelInfo = new PainelInfo()
    this.qtdConteudos = Array(this.painelInfo.qtdAbas).fill(1).map((x,i)=>i++);
  }
}
