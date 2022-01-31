import BookDetail from "./BookDetail";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {BrowserRouter} from 'react-router-dom';
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";

export default{
    title: 'Organisms/Book Detail',
    component: BookDetail
} as ComponentMeta<typeof BookDetail>

const Template : ComponentStory<typeof BookDetail> = args => <ThemeProvider theme={customTheme}> <BrowserRouter> <BookDetail /> </BrowserRouter> </ThemeProvider>

export const bookDetail = Template.bind({})