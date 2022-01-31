import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";

export default{
    title: 'Organisms/Blinkist Header',
    component: Header
} as ComponentMeta<typeof Header>

const Template : ComponentStory<typeof Header> = args => <ThemeProvider theme={customTheme}> <Header /> </ThemeProvider> 

export const BlinkistHeader = Template.bind({})