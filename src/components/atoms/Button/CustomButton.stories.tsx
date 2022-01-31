import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomButton from "./CustomButton";
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";
import AddIcon from '@mui/icons-material/Add';

export default{
    title: 'Atoms/Button',
    component: CustomButton
} as ComponentMeta<typeof CustomButton>

const Template : ComponentStory<typeof CustomButton> = args => (  <ThemeProvider theme={customTheme}> <CustomButton {...args} /> </ThemeProvider> );

export const Button = Template.bind({})

Button.args={
    variant:"text",
    startIcon:<AddIcon/>,
    children:"Add to library"
}