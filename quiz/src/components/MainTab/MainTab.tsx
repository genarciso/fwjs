import {MenuTab} from '../MenuTab/MenuTab';
import {ConteudoTab} from '../ConteudoTab/ConteudoTab';
import React, {useState} from 'react';
import {IConteudo} from "../../models/IConteudo";

export interface IMain {
    conteudos: IConteudo[]
}


export function MainTab(props: IMain) {
    const [ abaSelecionada, setAbaSelecionada ] = useState<number>(0)
    function select(optionIndex: number) {
        setAbaSelecionada(optionIndex)
    }

    return (
            <div id = "main">
                <MenuTab conteudos={props.conteudos} onSelection={select}/>
                <ConteudoTab abaAtual={abaSelecionada} conteudos={ props.conteudos }/>
            </div>
    )
}
