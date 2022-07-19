<template>
  <div id = "main">
    <Menu @on-selection="select"
          :conteudos="conteudos"
    ></Menu>
    <Painel :conteudo="conteudos[abaSelecionada].conteudo "> </Painel>
  </div>
</template>

<script setup lang="ts">
import Menu from "../Menu/Menu.vue";
import Painel from "../Painel/Painel.vue";
import {ref} from "vue";
import type {ConteudoModel} from "../../models/CoteundoModel";

const abaSelecionada = ref(0)
const conteudos: ConteudoModel[] = [{
  titulo: "Tab 1",
  conteudo: "Conteudo 1"
}, {
  titulo: "Tab 2",
  conteudo: "Conteudo 2"
}]

function select(optionIndex: number) {
  abaSelecionada.value = optionIndex
}
</script>

<style scoped>
#main {
  background-color: aliceblue;
}
</style>
