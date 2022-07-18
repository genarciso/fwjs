<form class="qst-form" on:submit|preventDefault ={submit}>
    <div>
        <label>Num. Tabs</label>
        <input type="number"
               min="1" max="5"
               value={conteudos.length}
               on:change={ e => mudarNumConteudo(e.target.value)} />
        {#if ($errorValidation['numConteudo'])}
            <div class="error">{ $errorValidation['numConteudo'] }</div>
        {/if}

    </div>
    {#each conteudos as conteudo, index}
        <div id={`conteudo_aba_${index}`}>
            <label>Título</label>
            <input type="text" bind:value={conteudo.titulo}
                   on:change={() => { verificarTituloAba(index) }}
                   on:blur={ e => { $touchValidation[`conteudo_aba_titulo_${index}`]
                   && errorValidation.check(e.target.value, required, `conteudo_aba_titulo_${index}`) } } />
            {#if ($errorValidation[`conteudo_aba_titulo_${index}`])}
                <div class="error">{ $errorValidation[`conteudo_aba_titulo_${index}`] }</div>
            {/if}
            <label>Conteúdo</label>
            <textarea bind:value={conteudo.conteudo}
                      on:blue={ e => { $touchValidation[`conteudo_aba_conteudo_${index}`]
                      && errorValidation.check(e.target.value, required, `conteudo_aba_conteudo_${index}`)}}
                      on:change={() => {verificarConteudoAba(index)}}
            ></textarea>
            {#if ($errorValidation[`conteudo_aba_conteudo_${index}`])}
                <div class="error">{ $errorValidation[`conteudo_aba_conteudo_${index}`] }</div>
            {/if}

        </div>
    {/each}
    <div>
        <div class="buttons">
            <input type="submit" value="Enviar" />
        </div>
    </div>
</form>

<script lang="ts">
    import { errorValidation } from "../../utils/errorValidation";
    import { touchValidation} from "../../utils/touchValidation";
    import {inRange, isInt, required} from "../../utils/validation";
    import type {ConteudoModel} from "../../models/ConteudoForm";
    import {createEventDispatcher} from "svelte";
    export interface ConteudoFormEvent {
        submit: ConteudoModel[]
    }
    const emit = createEventDispatcher<ConteudoFormEvent>()
    let conteudos: ConteudoModel[] = [{
        titulo: '',
        conteudo: ''
    } as ConteudoModel]
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


        if (errorValidation.check(value, validateFunc, 'numConteudo')) {
            const qtdRequisitada = parseInt(value, 10)
            if (qtdRequisitada <= conteudos.length) {
                for (let i = qtdRequisitada; i < conteudos.length; i++) {
                    touchValidation.touch(`conteudo_aba_titulo_${i}`, false) // limpa os indicadores de alteraçao dos conteudos removidos
                    touchValidation.touch(`conteudo_aba_conteudo_${i}`, false) // limpa os indicadores de alteraçao dos conteudos removidos
                    errorValidation.setErrors(`conteudo_aba_titulo_${i}`, '') // limpa as mensagens de erro dos conteudos removidos
                    errorValidation.setErrors(`conteudo_aba_conteudo_${i}`, '') // limpa as mensagens de erro dos conteudos removidos
                }
                conteudos.splice(qtdRequisitada, conteudos.length - qtdRequisitada)
            }
            else {
                while (conteudos.length < qtdRequisitada) {
                    conteudos.push({
                        conteudo: '',
                        titulo: ''
                    } as ConteudoModel)
                }
            }
        }
    }
    function verificarTituloAba(index: number) {
        touchValidation.touch(`conteudo_aba_titulo_${index}`, true)
        errorValidation.check(conteudos[index].conteudo, required, `conteudo_aba_titulo_${index}`)
    }
    function verificarConteudoAba(index: number) {
        touchValidation.touch(`conteudo_aba_conteudo_${index}`, true)
        errorValidation.check(conteudos[index].conteudo, required, `conteudo_aba_conteudo_${index}`)
    }
    /**
     * Verifica se há erros no formulário e, se estiverem corretos, trata os dados.
     */
    function submit() {
        const optionsOk = conteudos
            .map( ( conteudo, index ) =>
                errorValidation.check(conteudo.conteudo, required, `conteudo_aba_conteudo_${index}`)
                && errorValidation.check(conteudo.titulo, required, `conteudo_aba_titulo_${index}`) )
            .every(obj => obj)
        if (optionsOk) {
            emit('submit', [...conteudos])
        } else {
            conteudos.forEach( (conteudo, index) => {
                errorValidation.check(conteudo.conteudo, required, `conteudo_aba_conteudo_${index}`)
                errorValidation.check(conteudo.titulo, required, `conteudo_aba_titulo_${index}`)
            })}
    }
</script>

<style>
    .qst-form {
        --label-size: 150px;
        --label-margin: 10px;
        --label-width: calc(var(--label-size) + var(--label-margin));
        --border-size: 1px;
        --border-color: #ccc;
        --border-radius: 5px;
        --input-padding: 5px;
        --input-number-size: 30pt;
        padding: 20px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .qst-form label {
        width: var(--label-size);
        display: inline-block;
        text-align: right;
        font-weight: bold;
        margin-right: var(--label-margin);
        vertical-align: top;
    }
    .qst-form .error {
        font-style: italic;
        font-size: 10pt;
        color: red;
        margin-left: var(--label-width);
        height: 20pt;
    }
    .qst-form .buttons {
        margin-top: 10px;
        padding-top: 10px;
        border-top: var(--border-size) solid var(--border-color);
        display: flex;
        justify-content: flex-end;
    }
    .qst-form textarea {
        height: 100px;
        margin-bottom: -5pt;
    }
    .qst-form input[type="submit"] {
        padding: 4pt 8pt;
    }
    .qst-form input[type="radio"]:not(:first-child) {
        margin-left: 20px;
    }
    .qst-form input[type="text"],
    .qst-form input[type="number"],
    .qst-form textarea {
        border-radius: var(--border-radius);
        border: var(--border-size) solid var(--border-color);
        padding: var(--input-padding);
    }
    .qst-form input[type="text"],
    .qst-form textarea {
        width: calc(100% - (var(--label-width) + 2 * (var(--border-size) + var(--input-padding))));
    }
    .qst-form input[type="number"] {
        width: var(--input-number-size);
    }

</style>
