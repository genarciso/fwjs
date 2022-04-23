<template>
  <nav class='header-menu'>
    <ul>
      <li v-for="index in [0,1, 2, 3]" :key={index}>
        <button :class="{selected: index === selected}"
                :key="{index}"
                @click="$emit('onSelection', index);">
          Tab {{ index+1 }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  export interface MenuProps {
    selected: number;
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
