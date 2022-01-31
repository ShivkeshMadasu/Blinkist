import ExploreBooks from "./ExploreBooks";
import {BrowserRouter} from 'react-router-dom';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";

export default{
    title:"Organisms/Explore Books",
    components:ExploreBooks
}as ComponentMeta<typeof ExploreBooks>

const Template: ComponentStory<typeof ExploreBooks> = ()=> <ThemeProvider theme={customTheme}> <BrowserRouter><ExploreBooks /> </BrowserRouter> </ThemeProvider>

export const exploreBooks = Template.bind({})