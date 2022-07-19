import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ConteudoTab, IConteudoTab} from "../../components/ConteudoTab/ConteudoTab";

export default {
    title: 'Tab/Conteudo',
    component: ConteudoTab,
    argTypes: {
        abaAtual: {
            control: {
                type: 'radio',
                options: [0, 1]
            }
        }
    }
} as ComponentMeta<typeof ConteudoTab>

const Template: ComponentStory<typeof ConteudoTab> = (args) => <ConteudoTab {...args} />

const conteudosTeste = [{
    "titulo": 'Tab 1',
    "conteudo": 'Conteudo 1'
}, {
    "titulo": 'Tab 2',
    "conteudo": 'Conteudo 2'
}]

export const Conteudo = Template.bind({})
Conteudo.args = {
    abaAtual: 0,
    conteudos: conteudosTeste
}
