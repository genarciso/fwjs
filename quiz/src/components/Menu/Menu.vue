<template>
  <nav class='header-menu'>
    <ul>
      <li v-for="(conteudo, index) in conteudos" :key={index}>
        <button :class="{selected: index === selecionado}"
                :key="{index}"
                @click="$emit('onSelection', index);">
          {{conteudos[index].titulo}}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import type {ConteudoModel} from "@/models/CoteundoModel";

  export interface MenuProps {
    conteudos: ConteudoModel[]
    selecionado: number;
  }
  export interface MenuEvents {
    (e: 'onSelection', val: number): void
  }

  defineProps<MenuProps>()
  defineEmits<MenuEvents>()

</script>

<style scoped>
  .header-menu {
    height: auto;
  }

  .header-menu ul li {
    height: auto;
    display: inline-block;
  }

  .header-menu ul li button {
    border-radius: 10%;
    text-align: center;
    color: rgb(0, 0, 0);
    font-size: 14px;
    line-height: 60px;
    margin-right: 10px;
    padding: 0 10px;
    background-color: rgb(182, 181, 181);
  }

  .selected {
    background-color: blue;
    font-style: oblique;
    border: 3px solid rgb(0, 0, 0);
  }
</style>
