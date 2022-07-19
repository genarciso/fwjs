import {PainelComponent} from "../../app/components/painel/painel.component";
import {Meta, Story} from "@storybook/angular/types-6-0";

export default {
  title: 'Tab/Painel',
  component: PainelComponent,
  argTypes: {
    conteudo: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<PainelComponent>

const Template: Story<PainelComponent> = (args) => ({
  props: args
})

export const Painel = Template.bind({})
Painel.args = {
  conteudo: 'Teste'
}
