import EntrepreneurshipPage from "./EntrepreneurshipPage";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {BrowserRouter} from 'react-router-dom';
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";

export default{
    title: 'Pages/Entrepreneurship Page',
    component: EntrepreneurshipPage
} as ComponentMeta<typeof EntrepreneurshipPage>

const Template : ComponentStory<typeof EntrepreneurshipPage> = args => <ThemeProvider theme={customTheme}> <BrowserRouter> <EntrepreneurshipPage /> </BrowserRouter> </ThemeProvider>

export const entrepreneurshipPage = Template.bind({})
