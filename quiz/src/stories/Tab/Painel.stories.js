import painel from "../../components/Painel/painel.svelte";

export default {
    title: 'Tab/Painel',
    component: painel,
    argTypes: {
        conteudo: { control: 'text' }
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
