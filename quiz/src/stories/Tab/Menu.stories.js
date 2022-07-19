import Menu from "../../components/Menu/Menu.vue";

export default {
    title: 'Tab/Menu',
    component: Menu,
    argType: {
        onSelection: {
            action: "Clicou"
        },
    }
};
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Menu },
    setup() {
        return { args };
    },
    // Here we define the `template`
    template: '<Menu v-bind="args" ></Menu>',
});

export const Teste = Template.bind({});
Teste.args = {
    conteudos: [{
        titulo: "Tab 1",
        conteudo: "Conteudo 1"
    }, {
        titulo: "Tab 2",
        conteudo: "Conteudo 2"
    }]
}
