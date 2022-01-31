import BookDetailPage from "./BookDetailPage";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {BrowserRouter} from 'react-router-dom';
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";

export default{
    title: 'Pages/Book Detail Page',
    component: BookDetailPage
} as ComponentMeta<typeof BookDetailPage>

const Template : ComponentStory<typeof BookDetailPage> = args => <ThemeProvider theme={customTheme}> <BrowserRouter> <BookDetailPage /> </BrowserRouter> </ThemeProvider>

export const bookDetailPage = Template.bind({})
