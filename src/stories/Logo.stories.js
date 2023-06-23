import LogoComponent from "../components/logo"
import "../css/_variables.css"

export default {
  title: "Components/LogoComponent",
  component: LogoComponent,
  argTypes: {  },
}

const Template = args => <LogoComponent {...args} />

export const Label = Template.bind({})
Label.args = {
  label: "My Logo",
}

export const PropStyleStorie= Template.bind({})
PropStyleStorie.args = {
  propStyles:{
        color:'var(--global-logo-font-color)',
        background:'var(--global-logo-background-color)',
        borderRadius:'var(--global-logo-radius)',
        borderWidth:'var(--global-logo-border-width)',
        borderColor:'var(--global-logo-border-color)',
        width:"25vw",
        fontWeight:'var(--global-logo-font-weight)',
        fontSize:'var(--global-logo-font-size)',
  },
  label: "My Logo",
}

