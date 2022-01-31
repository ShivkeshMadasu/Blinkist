import Footer from "./Footer";
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";
import { ComponentStory } from "@storybook/react";

export default{
    title:'Organisms/Blinkist Footer',
    component: Footer
}

const Template: ComponentStory<typeof Footer> = args => <ThemeProvider theme={customTheme}> <Footer /> </ThemeProvider> 

export const BlinkistFooter = Template.bind({})