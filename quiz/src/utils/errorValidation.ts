import {reactive} from "vue";

export interface ErrorValidation {
    errors: {[name: string]: string}
    setErrors: (name:string, error:string) => void
    check: (value: string, validateFunc: Function, name: string) => boolean
}


export const errorValidation = reactive<ErrorValidation>({
    errors:  reactive<{[name: string]: string}>({}),     // erros nos campos dos formulários
    setErrors(name: string, error: string) {
        this.errors[name] = error
    },
    check(value: string, validateFunc: Function, name: string) {
        const error = validateFunc(value)
        this.setErrors(name, error)
        return error === null
    }
})
