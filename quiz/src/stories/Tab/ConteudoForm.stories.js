import ConteudoForm from "../../components/ConteudoForm/ConteudoForm.vue";

export default {
    title: 'Tab/ConteudoForm',
    component: ConteudoForm
}

const Template = () => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ConteudoForm },

    // Here we define the `template`
    template: '<ConteudoForm></ConteudoForm>',
});

export const f1 = Template.bind({})
