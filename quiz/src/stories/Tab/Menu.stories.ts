import {MenuComponent} from "../../app/components/menu/menu.component";
import {Meta, Story} from "@storybook/angular/types-6-0";

export default {
  title: 'Tab/Menu',
  component: MenuComponent,
  argTypes: {
    selecao: {
      action: 'clicou no botão: '
    },
    selecionado: {
      control: {
        type: 'radio',
        options: [0, 1]
      }
    }
  }
} as Meta

const Template: Story<MenuComponent> = (args) => ({
  props: args,
})

export const Menu = Template.bind({})
Menu.args = {
  selecionado: 0,
  conteudos: [ {
    titulo: "Tab 1",
    conteudo: "Conteudo 1",
    aba: 0
  }, {
    titulo: 'Tab 2',
    conteudo: 'Conteudo 2',
    aba: 0
  } ]
}
