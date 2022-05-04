<div class="conteudo">
    <p>{ aoTrocarConteudo(abaAtual) }</p>
</div>

<script lang="ts">

    export let abaAtual: number;
    let conteudo: string;

    function aoTrocarConteudo(aba: number) {
        switch( aba ) {
            case 0:
                return conteudo = "Conteudo do usuario 1"
            case 1:
                return conteudo = "Conteudo do usuario 2"
            case 2:
                return conteudo = "Conteudo do usuario 3"
            case 3:
                return conteudo = "Conteudo do usuario 4"
            default:
                return conteudo = "Conteudo qualquer"
        }
    }
</script>

<style>
    .conteudo {
        border-radius: 10%;
        background-color: rgb(182, 181, 181);
        height: 250px;
        width: 500px;
        text-align: center;
        margin-left: 40px;
    }
</style>
