import {ComponentMeta, ComponentStory} from "@storybook/react";
import {MainTab} from "../../components/MainTab/MainTab";

export default {
    title: 'Tab/Main',
    component: MainTab,
    argTypes: {
        conteudos: {}
    }
} as ComponentMeta<typeof MainTab>

const Template: ComponentStory<typeof MainTab> = (args) => <MainTab {...args} />
export const Main = Template.bind({})
Main.args = {
    conteudos: [{
        titulo: 'Tab 1',
        conteudo: 'Conteudo 1'
    }, {
        titulo: 'Tab 2',
        conteudo: 'Conteudo 2'
    }]
}
