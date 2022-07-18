import menu from "../../components/Menu/menu.svelte";

export default {
    title: 'Tab/Menu',
    component: menu,
    argTypes: {
        onClicked: { action: 'onClicked'}
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
Menu.args = {
    selecionado: 0,
    conteudos: [{
        titulo: 'Tab 1',
        conteudo: 'Conteudo 1'
    }, {
        titulo: 'Tab 2',
        conteudo: 'Conteudo 2'
    }]
}
