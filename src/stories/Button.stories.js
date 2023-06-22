import Button from "../components/button/button"
import "../css/_variables.css"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Label = Template.bind({})
Label.args = {
  label: "Press Me",
}

export const PropStyleGreenBackground= Template.bind({})
PropStyleGreenBackground.args = {
  propStyles:{background: "green"},
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

/*
export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
  size: "md",
} */