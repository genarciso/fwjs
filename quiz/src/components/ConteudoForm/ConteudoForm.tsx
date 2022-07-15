import {FormEvent, useState} from "react";
import {inRange, isInt, required} from "../../utils/validation";
import {IConteudo} from "../../models/IConteudo";
import {useErrors} from "../../hooks/error-hook";
import {useTouch} from "../../hooks/touched-hook";
import "./ConteudoForm.css"


interface IConteudoForm {
    onSubmit: (conteudos: IConteudo[]) => void
}

export function ConteudoForm({ onSubmit }: IConteudoForm) {
    const [ conteudos, setConteudos ] = useState<IConteudo[]>([{
        conteudo: "",
        aba: 0,
        titulo: ""
    } as IConteudo])
    const { errors, setErrors, check } = useErrors<{[name: string]: boolean}>()     // erros nos campos dos formulários
    const { touched, touch } = useTouch<{[name: string]: boolean}>()  // indica, para cada campo, se ele foi alterado pelo usuário


    /**
     * Altera o número de conteudos.
     * @param value Novo número de opções
     */
    function mudarNumConteudo(value: string) {
        // cria uma função de validação cujo valor deve estar entre 1 e 5
        const range = inRange(1, 5)

        // função de validação combina outras funções de validação
        // o erro atribuído será o da primeira que retornar algum erro, devido ao "ou" (||)
        const validateFunc = (value: string) => required(value) || isInt(value) || range(value)

        // se passar no teste de validação, altera o tamanho do array `options`
        if (check(value, validateFunc, 'numConteudo')) {
            const qtdRequisitada = parseInt(value, 10)
            if (qtdRequisitada <= conteudos.length) {
                for (let i = qtdRequisitada; i < conteudos.length; i++) {
                    touch(`conteudo_aba_titulo_${i}`, false) // limpa os indicadores de alteraçao dos conteudos removidos
                    touch(`conteudo_aba_conteudo_${i}`, false) // limpa os indicadores de alteraçao dos conteudos removidos
                    setErrors(`conteudo_aba_titulo_${i}`, '') // limpa as mensagens de erro dos conteudos removidos
                    setErrors(`conteudo_aba_conteudo_${i}`, '') // limpa as mensagens de erro dos conteudos removidos
                }
                setConteudos(conteudos.slice(0, qtdRequisitada))

            }
            else {
                const final = Array(qtdRequisitada - conteudos.length).fill({
                    titulo: '',
                    conteudo: '',
                    aba: 0
                } as IConteudo)
                setConteudos([...conteudos, ...final])
            }
        }
    }

    function mudarTituloAba(index: number, value: string) {
        const novoConteudo = [...conteudos]
        novoConteudo[index].titulo = value
        setConteudos(novoConteudo)
        touch(`conteudo_aba_titulo_${index}`)
    }

    function mudarConteudoAba(index: number, value: string) {
        const novoConteudo = [...conteudos]
        novoConteudo[index].conteudo = value
        setConteudos(novoConteudo)
        touch(`conteudo_aba_conteudo_${index}`)
    }

    /**
     * Verifica se há erros no formulário e, se estiverem corretos, trata os dados.
     * @param e Evento de submissão do formulário
     */
    function submit(e: FormEvent) {
        e.preventDefault()
        const optionsOk = conteudos
                .map( ( conteudo, index ) =>
                    check(conteudo.titulo, required, `conteudo_aba_titulo_${index}`)
                    && check(conteudo.conteudo, required, `conteudo_aba_conteudo_${index}`))
                .every(obj => obj)

        if (optionsOk) {
            conteudos.forEach( ( item, index ) => item.aba = index)
            onSubmit( conteudos )
        }
    }

    // Elemento com o número de opções
    const numAbasElm = (
        <div>
            <label>Num. Tabs</label>
            <input type="number" value={conteudos.length} onChange={e => mudarNumConteudo(e.target.value)} />
            <div className="error">{ errors.numConteudo }</div>
        </div>
    )

    // Lista com as opções
    const listaConteudosElm = conteudos.map((conteudo, index) => (
        <div key={`conteudo_aba_${index}`}>
            <label>Título</label>
            <input type="text" value={conteudo.titulo}
                   onChange={e => mudarTituloAba(index, e.target.value)}
                   onBlur={e => touched[`conteudo_aba_titulo_${index}`] && check(e.target.value, required, `conteudo_aba_titulo_${index}`)}
            />
            <div className="error">{ errors[`conteudo_aba_titulo_${index}`] }</div>
            <label>Conteúdo</label>
            <textarea value={conteudo.conteudo}
                      onChange={e => mudarConteudoAba(index, e.target.value)}
                      onBlur={e => touched[`conteudo_aba_conteudo_${index}`] && check(e.target.value, required, `conteudo_aba_conteudo_${index}`)}
            >
            </textarea>
            <div className="error">{ errors[`conteudo_aba_conteudo_${index}`] }</div>
        </div>
    ))

    const botoes = (
        <div>
            <div className="buttons">
                <input type="submit" value="Enviar" />
            </div>
        </div>
    )

    // Formulário completo
    return (
        <form className="qst-form" onSubmit={submit}>
            { numAbasElm }
            { listaConteudosElm }
            { botoes }
        </form>
    )
}
