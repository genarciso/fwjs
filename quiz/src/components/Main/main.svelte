<div id = "main">
    <Menu on:selection={event => select(event.detail)}
          selected={abaSelecionada}
    ></Menu>
    <Painel abaAtual={abaSelecionada}></Painel>

</div>

<script lang="ts">
    import Menu from '../Menu/menu.svelte'
    import Painel from '../Painel/painel.svelte'

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
