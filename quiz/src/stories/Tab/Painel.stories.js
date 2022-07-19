import Painel from "../../components/Painel/Painel.vue";

export default {
    title: 'Tab/Painel',
    component: Painel,
    argType: {
        conteudo: {
            control: {
                type: 'text'
            }
        }
    }
};
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Painel },
    setup() {
        return { args };
    },
    // Here we define the `template`
    template: '<Painel v-bind="args" />',
});

export const Teste = Template.bind({});
Teste.args = {
    conteudo: "Teste"
}
