import {MainTab} from "../../components/MainTab/MainTab";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ConteudoTab} from "../../components/ConteudoTab/ConteudoTab";

export default {
    title: 'Tab/Conteudo',
    component: ConteudoTab,
    argTypes: {
        currentTab: {
            control: {
                type: 'radio',
                options: [0, 1, 2, 3]
            }
        }
    }
} as ComponentMeta<typeof ConteudoTab>

const Template: ComponentStory<typeof ConteudoTab> = (args) => <ConteudoTab {...args} />

export const Conteudo = Template.bind({})
