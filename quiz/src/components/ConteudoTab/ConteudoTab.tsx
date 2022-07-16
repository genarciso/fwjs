import './ConteudoTab.css'
import {IConteudo} from "../../models/IConteudo";

export interface IConteudoTab {
    abaAtual: number
    conteudos: IConteudo[]
}
export function ConteudoTab(prop: IConteudoTab) {
    return (
        <div className='conteudo'>
            <p>{ prop.conteudos[prop.abaAtual] ? prop.conteudos[prop.abaAtual].conteudo : '' }</p>
        </div>
    )

}
