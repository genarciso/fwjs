import './ConteudoTab.css'
import {IConteudo} from "../../models/IConteudo";

export function ConteudoTab(prop: IConteudo) {
    const conteudoElm =  (
        <div className='conteudo'>
            <p>{ prop.conteudo }</p>
        </div>
    )
    return (
        { conteudoElm }
    )
}
