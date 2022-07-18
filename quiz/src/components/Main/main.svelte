<div>
    <div>
        <ConteudoForm on:submit={event => addConteudos(event.detail)}></ConteudoForm>
    </div>
    <div id = "main">
        <Menu on:selection={event => select(event.detail)}
              conteudos={ $conteudoStore }
              selecionado={ abaSelecionada }
        ></Menu>
        <Painel conteudo={$conteudoStore[abaSelecionada] ?
    $conteudoStore[abaSelecionada].conteudo : ''}> </Painel>
    </div>
</div>

<script lang="ts">
    import ConteudoForm from '../ConteudoForm/conteudo-form.svelte'
    import Menu from '../Menu/menu.svelte'
    import Painel from '../Painel/painel.svelte'
    import type {ConteudoModel} from "../../models/ConteudoForm";
    import {conteudoStore} from "../../store/conteudo.store";

    let abaSelecionada = 0
    function select(optionIndex: number) {
        abaSelecionada = optionIndex
    }
    function addConteudos(conteudos: ConteudoModel[]) {
        conteudoStore.addConteudos([...conteudos])
    }
</script>

<style>
    #main {
        background-color: aliceblue;
    }
</style>
