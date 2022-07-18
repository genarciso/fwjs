import {writable} from "svelte/store";

const { update, subscribe } = writable({})
export const touchValidation = {
    subscribe,
    touch
}

function touch(name: string, value: boolean = true) {
    update(list => {
        list[name] = value
        return list
    })
}
