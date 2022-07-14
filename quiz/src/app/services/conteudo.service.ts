import { Injectable } from "@angular/core";

export class PainelInfo {
  constructor(
    public qtdAbas: number = 1,   // Quantidade de abas que devem ter
    public abas: ConteudoAba[] = [new ConteudoAba()]    // Array com o conteudo das abas
  ) {}
}

export class ConteudoAba {
  constructor(
    public titulo: string = '',             // titulo da aba
    public conteudo: string = '',           // conteúdo da aba
    public aba: number = 0                  // aba no qual pertence
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class ConteudoService {
  painelInfo: PainelInfo = new PainelInfo()

  add(painelInfo: PainelInfo) {
    this.painelInfo = painelInfo
  }
}
