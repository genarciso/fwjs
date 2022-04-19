import { useState } from 'react';
import './MenuTab.css';

interface MenuInterface {
    onSelection: Function
}


export function MenuTab(props: MenuInterface) {
    const buttons = []
    const [selected, setSelected] = useState(0) 


    for (let index = 0; index < 4; index++) {
        buttons.push(<li key={index}>
            <button key={index} className={index === selected ? 'selected' : ''}  onClick = {() => { props.onSelection(index); setSelected(index)}}>Tab {index+1}
            </button>
        </li>);
    }

    return <nav className="header-menu">
        <ul >
            {
             buttons   
            }
        </ul>
    </nav>
}