import type {ConteudoModel} from "../models/ConteudoForm";
import {writable} from "svelte/store";

const { set, subscribe } = writable([{
    titulo: '',
    conteudo: ''
} as ConteudoModel])
export const conteudoStore = {
    addConteudos,
    subscribe
}
function addConteudos (conteudosNovos: ConteudoModel[]) {
        set(conteudosNovos)

    }

