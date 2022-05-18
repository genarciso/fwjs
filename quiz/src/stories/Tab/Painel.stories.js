import painel from "../../components/Painel/painel.svelte";

export default {
    title: 'Tab/Painel',
    component: painel,
    argTypes: {
        abaAtual: {
            control: {
                type: 'radio',
                options: [0, 1, 2, 3]
            }
        }
    }
};

const Template = (args) => ({
    Component: painel,
    props: args,
});

export const Painel = Template.bind({})
Painel.args = {
    abaAtual: 0
}
