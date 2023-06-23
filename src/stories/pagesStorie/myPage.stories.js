import Mypage from "../../pages/myPage"
import "../../css/_variables.css"

export default {
  title: "Pages/Mypage",
  component: Mypage,
  argTypes: {  },
}

const rootStyles = getComputedStyle(document.documentElement);

function hexToRgb(hex,opacity=1) {
    // Remove the '#' symbol if present
    hex = hex.replace('#', '');
  
    // Check if the hex value is in the shorthand format (e.g., #abc)
    if (hex.length === 3) {
      hex = hex.replace(/(.)/g, '$1$1');
    }
  
    // Extract the red, green, and blue components
    const red = parseInt(hex.substr(0, 2), 16);
    const green = parseInt(hex.substr(2, 2), 16);
    const blue = parseInt(hex.substr(4, 2), 16);
  
    // Return the RGB value as a string
    return `rgb(${red}, ${green}, ${blue},${opacity})`;
  }

const Template = args => <Mypage {...args} />

export const DefaultType= Template.bind({})
DefaultType.args = {
    rootStyles:rootStyles,
    hexToRgb: (val1,val2)=>hexToRgb(val1,val2),
}

