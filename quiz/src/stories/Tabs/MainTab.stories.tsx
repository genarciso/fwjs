import {ComponentMeta, ComponentStory} from "@storybook/react";
import {MainTab} from "../../components/MainTab/MainTab";

export default {
    title: 'Tab/Main',
    component: MainTab,
} as ComponentMeta<typeof MainTab>

const Template: ComponentStory<typeof MainTab> = () => <MainTab />

export const Main = Template.bind({})
