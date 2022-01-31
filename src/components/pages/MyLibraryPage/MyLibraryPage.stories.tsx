import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLibraryPage from "./MyLibraryPage";
import {BrowserRouter} from 'react-router-dom';
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";

export default{
    title: 'Pages/My Library',
    component: MyLibraryPage
} as ComponentMeta<typeof MyLibraryPage>

const Template : ComponentStory<typeof MyLibraryPage> = args => <ThemeProvider theme={customTheme}> <BrowserRouter> <MyLibraryPage /> </BrowserRouter> </ThemeProvider>

export const MyLibrary = Template.bind({})
