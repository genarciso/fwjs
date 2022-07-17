import {reactive} from "vue";
import type {ConteudoModel} from "@/models/CoteundoModel";

export interface ConteudoStore {
    conteudos: ConteudoModel[]
    add: (conteudosNovos: ConteudoModel[]) => void
}

export const conteudoStore = reactive<ConteudoStore>({
    conteudos: reactive<ConteudoModel[]>([]),
    add(conteudosNovos: ConteudoModel[]) {
        this.conteudos = [...conteudosNovos]
    }
})
