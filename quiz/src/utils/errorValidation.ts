import {writable} from "svelte/store";

const { update, subscribe } = writable({})
export const errorValidation = {
    subscribe,
    setErrors,
    check
}

function setErrors(name: string, error: string) {
    update(errors => {
        errors[name] = error
        return errors
    })
}

function check(value: string, validateFunc: Function, name: string) {
    const error = validateFunc(value)
    this.setErrors(name, error)
    return error === null
}
