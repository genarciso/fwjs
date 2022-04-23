<template>
  <div id = "main">
    <Menu @on-selection="select"
          :selected="abaSelecionada"
    ></Menu>
    <Painel :abaAtual="abaSelecionada"> </Painel>
  </div>
</template>

<script setup lang="ts">

import Menu from "@/components/Menu/Menu.vue";
import Painel from "@/components/Painel/Painel.vue";
import {ref} from "vue";

  const abaSelecionada = ref(0)

  function select(optionIndex: number) {
    abaSelecionada.value = optionIndex
  }
</script>

<style scoped>
  #main {
    background-color: aliceblue;
  }
</style>
