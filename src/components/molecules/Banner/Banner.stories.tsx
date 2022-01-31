import Banner from './Banner';
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";
import { ComponentStory } from "@storybook/react";

export default{
    title:'Molecules/Banner',
    component: Banner
}

const Template: ComponentStory<typeof Banner> = args => <ThemeProvider theme={customTheme}> <Banner /> </ThemeProvider> 

export const banner = Template.bind({})