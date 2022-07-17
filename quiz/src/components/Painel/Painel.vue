<template>
  <div class="conteudo">
    <p>{{ conteudo }}</p>
  </div>
</template>

<script setup lang="ts">
export interface PainelProp {
    conteudo: string
  }
  defineProps<PainelProp>()

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
