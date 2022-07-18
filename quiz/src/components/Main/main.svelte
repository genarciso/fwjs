<div>
    <div id = "main">
        <Menu on:selection={event => select(event.detail)}
              conteudos={ conteudos }
              selecionado={ abaSelecionada }
        ></Menu>
        <Painel conteudo={conteudos[abaSelecionada] ?
    conteudos[abaSelecionada].conteudo : ''}> </Painel>
    </div>
</div>

<script lang="ts">
    import Menu from '../Menu/menu.svelte'
    import Painel from '../Painel/painel.svelte'

    export const conteudos = [{
        titulo: 'Tab 1',
        conteudo: 'Conteudo 1'
    }, {
        titulo: 'Tab 2',
        conteudo: 'Conteudo 2'
    }]
    let abaSelecionada = 0
    function select(optionIndex: number) {
        abaSelecionada = optionIndex
    }
</script>

<style>
    #main {
        background-color: aliceblue;
    }
</style>
