import {useState} from "react";
import {IConteudo} from "../models/IConteudo";

export function useConteudo() {
    const  [conteudos, setConteudos] = useState<IConteudo[]>([])

    const addConteudo = (novoConteudo: IConteudo[]) => {
        setConteudos([...novoConteudo])
    }

    return { conteudos, addConteudo }
}
