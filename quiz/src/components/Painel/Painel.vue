<template>
  <div class="conteudo">
    <p>{{ aoTrocarConteudo(abaAtual) }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

export interface PainelProp {
    abaAtual: number
  }
  defineProps<PainelProp>()
  const conteudo = ref<string>()
  function aoTrocarConteudo(aba: number): string {
    switch( aba ) {
      case 0:
        return conteudo.value = "Conteudo do usuario 1"
      case 1:
        return conteudo.value = "Conteudo do usuario 2"
      case 2:
        return conteudo.value = "Conteudo do usuario 3"
      case 3:
        return conteudo.value = "Conteudo do usuario 4"
      default:
        return conteudo.value = "Conteudo qualquer"
    }
  }

</script>

<style scoped>
  .conteudo {
    border-radius: 10%;
    background-color: rgb(182, 181, 181);
    height: 250px;
    width: 500px;
    text-align: center;
    margin-left: 40px;
  }
</style>
