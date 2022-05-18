import { MenuTab } from '../MenuTab/MenuTab';
import { ConteudoTab } from '../ConteudoTab/ConteudoTab';
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
