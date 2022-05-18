import menu from "../../components/Menu/menu.svelte";

export default {
    title: 'Tab/Menu',
    component: menu,
    argTypes: {
        onClicked: { action: 'clicked'}
    }
};

const Template = (args) => ({
    Component: menu,
    props: args,
    on: {
       selection: args.onClicked,
    }
});

export const Menu = Template.bind({})
