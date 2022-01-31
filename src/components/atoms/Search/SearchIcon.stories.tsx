import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchIcon from "./SearchIcon";

export default{
    title: 'Atoms/Search',
    component: SearchIcon
} as ComponentMeta<typeof SearchIcon>;

const Template : ComponentStory<typeof SearchIcon> = args => <SearchIcon {...args} />;

export const Search = Template.bind({});
