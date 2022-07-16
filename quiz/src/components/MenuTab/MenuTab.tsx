import { useState } from 'react';
import './MenuTab.css';
import {IConteudo} from "../../models/IConteudo";

interface MenuInterface {
    conteudos: IConteudo[]
    onSelection: Function
}


export function MenuTab(props: MenuInterface) {
    const buttons = []
    const [selected, setSelected] = useState(0) 

    for (let index = 0; index < props.conteudos.length; index++) {
        buttons.push(
            <li key={index}>
                <button key={index}
                        className={index === selected ? 'selected' : ''}
                        onClick = {() => { props.onSelection(index); setSelected(index)}}>
                    {props.conteudos[index].titulo}
                </button>
            </li>
        );
    }

    return <nav className="header-menu">
        <ul>
            { buttons }
        </ul>
    </nav>
}
