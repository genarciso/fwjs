import {ComponentMeta, ComponentStory} from "@storybook/react";
import {MenuTab} from "../../components/MenuTab/MenuTab";

export default {
    title: 'Tab/Menu',
    component: MenuTab,
    argTypes: {
        onSelection: {
            action: 'clicou no botão: '
        }
    }
} as ComponentMeta<typeof MenuTab>

const Template: ComponentStory<typeof MenuTab> = (args) => <MenuTab {...args} />

export const Menu = Template.bind({})
