import {reactive} from "vue";
import type {ConteudoModel} from "@/models/CoteundoModel";

export interface ConteudoStore {
    conteudosStore: ConteudoModel[]
    add: (conteudosNovos: ConteudoModel[]) => void
}

export const conteudoStore = reactive<ConteudoStore>({
    conteudosStore: reactive<ConteudoModel[]>([]),

    add(conteudosNovos: ConteudoModel[]) {
        this.conteudosStore = []
        conteudosNovos.forEach( conteudo =>
            this.conteudosStore.push({...conteudo})
        )
    }
})
