import './ConteudoTab.css'

export interface IConteudoTab {
    abaAtual: number
    conteudos: [{[name: string]: string}]
}
export function ConteudoTab(prop: IConteudoTab) {
    return (
        <div className='conteudo'>
            <p>{ prop.conteudos[prop.abaAtual] ? prop.conteudos[prop.abaAtual].conteudo : '' }</p>
        </div>
    )

}
