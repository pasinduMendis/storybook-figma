import Button from "../components/button/button"
import "../css/_variables.css"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" },backgroundColor:{control:'color'} ,size: {
    options: ['sm', 'md','lg'],
    control: { type: 'radio' },
  },},
}

const Template = args => <Button {...args} />

export const Label = Template.bind({})
Label.args = {
  label: "Press Me",
}

export const PropStyleGreenBackgroundAndFullWidth= Template.bind({})
PropStyleGreenBackgroundAndFullWidth.args = {
  propStyles:{background: "green",width:"100vw"},
  label: "Press Me",
}

 export const Small = Template.bind({})
Small.args = {
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  label: "Press Me",
  size: "lg",
}

