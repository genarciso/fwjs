import {ComponentMeta, ComponentStory} from "@storybook/react";
import {MainTab} from "../../components/MainTab/MainTab";

export default {
    title: 'Tab/Main',
    component: MainTab,
} as ComponentMeta<typeof MainTab>

const Template: ComponentStory<typeof MainTab> = () => <MainTab conteudos={ [] } />
const conteudosTeste = [{
    "titulo": 'Tab 1',
    "conteudo": 'Conteudo 1'
}, {
    "titulo": 'Tab 2',
    "conteudo": 'Conteudo 2'
}]
export const Main = Template.bind({})
Main.args = {
    conteudos: conteudosTeste
}
