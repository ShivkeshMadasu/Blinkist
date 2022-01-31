import { ComponentMeta, ComponentStory } from "@storybook/react";
import Explore from "./Explore";
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";

export default{
    title:"Organisms/Explore",
    component:Explore
} as ComponentMeta<typeof Explore>

const Template : ComponentStory<typeof Explore> = args =>  <ThemeProvider theme={customTheme}> <Explore  /> </ThemeProvider>

export const explore = Template.bind({})