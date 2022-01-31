import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyLibrary from './MyLibrary';
import {BrowserRouter} from 'react-router-dom'
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";

export default{
    title: "Organisms/My Lib",
    component:MyLibrary
}as ComponentMeta<typeof MyLibrary>

const Template: ComponentStory<typeof MyLibrary>  = () =>  <ThemeProvider theme={customTheme}> <BrowserRouter> 
<MyLibrary />  </BrowserRouter> </ThemeProvider> 

export const MyLib = Template.bind({})