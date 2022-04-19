import './ConteudoTab.css'

interface ConteudoTabInterface {
    currentTab: number
}


export function ConteudoTab(prop: ConteudoTabInterface) {
    switch( prop.currentTab ){
        case 0:
            return <div className='conteudo'>
                <p>Conteudo do usuario 1</p>
            </div>
        case 1:
            return <div className='conteudo'>
                <p>Conteudo do usuario 2</p>
            </div>
        case 2:
            return <div className='conteudo'>
                <p>Conteudo do usuario 3</p>
            </div>
        case 3:
            return <div className='conteudo'>
                <p>Conteudo do usuario 4</p>
            </div>
        default:
            return <div className='conteudo'>
            <p>Conteudo qualquer</p>
        </div>
        
    }
        
    
}