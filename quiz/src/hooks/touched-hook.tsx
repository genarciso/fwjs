import {useState} from "react";

export function useTouch<T>() {
    const [ touched, setTouched ] = useState({})  // indica, para cada campo, se ele foi alterado pelo usuário

    /**
     * Indica quando um campo é alterado pelo usuário.
     * @param name Identificador do campo alterado pelo usuário.
     * @param value Valor booleano indicando se o campo foi alterado (true) ou não (false). Default: true.
     */
    function touch(name: string, value: boolean = true) {
        setTouched(prevTouched => ({ ...prevTouched, [name]: value }))
    }

    return { touched, touch }
}
