import HeaderTopic from "../components/headerTopic"
import "../css/_variables.css"

export default {
  title: "Components/HeaderTopic",
  component: HeaderTopic,
  argTypes: {  },
}

const Template = args => <HeaderTopic {...args} />

export const Label = Template.bind({})
Label.args = {
  label: "My Header",
}

export const PropStyleStorie= Template.bind({})
PropStyleStorie.args = {
  propStyles:{
    fontWeight:'var(--global-header-weight)',
    fontSize:'var(--global-header-font-size)',
    color:'var(--global-header-text-color)'
  },
  label: "My Header",
}

