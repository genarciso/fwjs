import {reactive} from "vue";

export interface TouchValidation {
    touched: {[name: string]: boolean}
    touch: (name: string, value: boolean) => void
}

export const touchValidation = reactive<TouchValidation>({
    touched: reactive<{[name: string]: boolean}>({}),  // indica, para cada campo, se ele foi alterado pelo usuário
    touch(name: string, value: boolean = true) {
        this.touched[name] = value
    }
})
