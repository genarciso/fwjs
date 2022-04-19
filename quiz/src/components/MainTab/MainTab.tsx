import { MenuTab } from '../../components/MenuTab/MenuTab';
import { ConteudoTab } from '../../components/ConteudoTab/ConteudoTab';
import { useState } from 'react';

export function MainTab() {
    const [currentSelection, setCurrentSelection] = useState(0)

    function select(optionIndex: number) {
        setCurrentSelection(optionIndex)
      }

    return (
        <div id = "main">
            <MenuTab onSelection={select}/>
            <ConteudoTab currentTab={currentSelection}/>
        </div>
        

    )
}