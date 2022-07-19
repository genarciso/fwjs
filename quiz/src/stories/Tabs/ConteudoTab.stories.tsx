import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ConteudoTab} from "../../components/ConteudoTab/ConteudoTab";

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

export const Conteudo = Template.bind({})
Conteudo.args = {
    conteudos: [{
        titulo: "Tab 1",
        conteudo: "Conteudo 1"
    }]
}
