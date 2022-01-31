import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomTabs from "./CustomTabs";
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";
//import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

export default{
    title: 'Organisms/Tabs',
    component: CustomTabs
} as ComponentMeta<typeof CustomTabs>

const Template: ComponentStory<typeof CustomTabs> = (args) => (
    <ThemeProvider theme={customTheme}>
        <CustomTabs {...args} />
</ThemeProvider>

  );
export const Tabs = Template.bind({});