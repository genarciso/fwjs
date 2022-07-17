<template>
  <div>
    <ConteudoForm @on-submit="addConteudos($event)"></ConteudoForm>
  </div>
  <div id = "main">
    <Menu @on-selection="select"
          :conteudos="conteudoStore.conteudos"
          :selecionado="abaSelecionada"
    ></Menu>
    <Painel :conteudo="conteudoStore.conteudos[abaSelecionada] ?
    conteudoStore.conteudos[abaSelecionada].conteudo : ''"> </Painel>
  </div>
</template>

<script setup lang="ts">
import {conteudoStore} from "@/store/conteudo.store"
import Menu from "../Menu/Menu.vue";
import Painel from "../Painel/Painel.vue";
import {ref} from "vue";
import ConteudoForm  from "@/components/ConteudoForm/ConteudoForm.vue";
import type {ConteudoModel} from "@/models/CoteundoModel";

const abaSelecionada = ref(0)

  function select(optionIndex: number) {
    abaSelecionada.value = optionIndex
  }

function addConteudos(conteudos: ConteudoModel[]) {
  conteudoStore.add(conteudos)
}
</script>

<style scoped>
  #main {
    background-color: aliceblue;
  }
</style>
