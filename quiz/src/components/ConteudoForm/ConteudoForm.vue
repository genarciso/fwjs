<template>
  <form class="qst-form" @submit.prevent="submit">
    <div>
      <label>Num. Tabs</label>
      <input type="number"
             :value="conteudos.length"
             @change="mudarNumConteudo($event.target.value)" />
      <div class="error">{{ errorValidation.errors.numConteudo }}</div>
    </div>
    <div v-for="(conteudo, index) in conteudos"
         :key="`conteudo_aba_${index}`">
      <label>Título</label>
      <input type="text" v-model="conteudo.titulo"
             :key="`conteudo_aba_titulo_${index}`"
             @change="verificarTituloAba(index)"
             @blur="touchValidation.touched[`conteudo_aba_titulo_${index}`] && errorValidation.check($event.target.value, required, `conteudo_aba_titulo_${index}`)"
      />
      <div class="error">{{ errorValidation.errors[`conteudo_aba_titulo_${index}`] }}</div>
      <label>Conteúdo</label>
      <textarea v-model="conteudo.conteudo"
                :key="`conteudo_aba_conteudo_${index}`"
                @blue="touchValidation.touched[`conteudo_aba_conteudo_${index}`] && errorValidation.check($event.target.value, required, `conteudo_aba_conteudo_${index}`)"
                @change="verificarConteudoAba(index)"
      >
      </textarea>
      <div class="error">{{ errorValidation.errors[`conteudo_aba_conteudo_${index}`] }}</div>
    </div>
    <div>
      <div class="buttons">
        <input type="submit" value="Enviar" />
      </div>
    </div>
  </form>

</template>

<script setup lang="ts">
import type {ConteudoModel} from "../../models/CoteundoModel";
import {reactive} from "vue";
import { errorValidation } from "../../utils/errorValidation";
import { touchValidation} from "../../utils/touchValidation";
import {inRange, isInt, required} from "../../utils/validation";

export interface ConteudoFormEvent {
  (e: 'onSubmit', conteudos: ConteudoModel[]): void
}

const emit = defineEmits<ConteudoFormEvent>()
const conteudos = reactive<ConteudoModel[]>([{
  conteudo: "",
  titulo: ""
} as ConteudoModel])

/**
 * Altera o número de conteudos.
 * @param value Novo número de opções
 */
function mudarNumConteudo(value: string) {
  // cria uma função de validação cujo valor deve estar entre 1 e 5
  const range = inRange(1, 5)

  // função de validação combina outras funções de validação
  // o erro atribuído será o da primeira que retornar algum erro, devido ao "ou" (||)
  const validateFunc = (value: string) => required(value) || isInt(value) || range(value)

  // se passar no teste de validação, altera o tamanho do array `options`
  if (errorValidation.check(value, validateFunc, 'numConteudo')) {
    const qtdRequisitada = parseInt(value, 10)
    if (qtdRequisitada <= conteudos.length) {
      for (let i = qtdRequisitada; i < conteudos.length; i++) {
        touchValidation.touch(`conteudo_aba_titulo_${i}`, false) // limpa os indicadores de alteraçao dos conteudos removidos
        touchValidation.touch(`conteudo_aba_conteudo_${i}`, false) // limpa os indicadores de alteraçao dos conteudos removidos
        errorValidation.setErrors(`conteudo_aba_titulo_${i}`, '') // limpa as mensagens de erro dos conteudos removidos
        errorValidation.setErrors(`conteudo_aba_conteudo_${i}`, '') // limpa as mensagens de erro dos conteudos removidos
      }

      conteudos.splice(qtdRequisitada, conteudos.length - qtdRequisitada)

    }
    else {
      while (conteudos.length < qtdRequisitada) {
        conteudos.push({
          conteudo: '',
          titulo: ''
        } as ConteudoModel)
      }
    }
  }
}

function verificarTituloAba(index: number) {
  touchValidation.touch(`conteudo_aba_titulo_${index}`, true)
  errorValidation.check(conteudos[index].conteudo, required, `conteudo_aba_titulo_${index}`)
}

function verificarConteudoAba(index: number) {
  touchValidation.touch(`conteudo_aba_conteudo_${index}`, true)
  errorValidation.check(conteudos[index].conteudo, required, `conteudo_aba_conteudo_${index}`)
}

/**
 * Verifica se há erros no formulário e, se estiverem corretos, trata os dados.
 */
function submit() {
  const optionsOk = conteudos
      .map( ( conteudo, index ) =>
          errorValidation.check(conteudo.conteudo, required, `conteudo_aba_conteudo_${index}`)
          && errorValidation.check(conteudo.titulo, required, `conteudo_aba_titulo_${index}`) )
      .every(obj => obj)

  if (optionsOk) {
    console.log()
    emit('onSubmit', [...conteudos])
  } else {
    conteudos.forEach( (conteudo, index) => {
      errorValidation.check(conteudo.conteudo, required, `conteudo_aba_conteudo_${index}`)
      errorValidation.check(conteudo.titulo, required, `conteudo_aba_titulo_${index}`)
    })}
}


</script>

<style scoped>
@import "ConteudoForm.css";
</style>
