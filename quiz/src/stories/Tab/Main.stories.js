import Main from "../../components/Main/Main.vue";

export default {
    title: 'Tab/Main',
    component: Main,
};
const Template = () => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Main },

    // Here we define the `template`
    template: '<Main></Main>',
});

export const Teste = Template.bind({});
