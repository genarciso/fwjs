import {useState} from "react";

export function useErrors<T>() {
    const [ errors, setError ] = useState<{[name: string]: string}>({})     // erros nos campos dos formulários

    function setErrors(name: string, error: string) {
        setError(prevErrors => ({ ...prevErrors, [name]: error }))
    }

    /**
     * Verifica se uma string passa em um dado teste de validação.
     * @param valor Valor a ser testado.
     * @param validateFunc Função de validação a ser aplicada sobre o valor (`value`).
     * @param name Identificador do elemento com a mensagem de erro, caso o valor não seja validado.
     * @returns Verdadeiro se passar no testo (for validado) ou falso, caso contrário.
     */
    function check(valor: string, validateFunc: Function, name: string) {
        const error = validateFunc(valor)
        setErrors(name, error)
        return error === null
    }

    return {errors, setErrors, check}
}
