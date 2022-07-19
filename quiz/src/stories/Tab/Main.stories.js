import Main from "../../components/Main/Main.vue";

export default {
    title: 'Tab/Main',
    component: Main,
    argsType: {
        abaSelecionada: {
            ccontrol: {
                type: 'radio',
                options: [0, 1]
            }
        }
    }
};
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Main },
    setup() {
        return { args };
    },
    // Here we define the `template`
    template: '<Main v-bind="args"></Main>',
});

export const Teste = Template.bind({});
Teste
