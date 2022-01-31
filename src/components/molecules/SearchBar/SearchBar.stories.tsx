import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from "./SearchBar";

export default {
    title:"Molecules/Search Bar",
    component:SearchBar
}as ComponentMeta<typeof SearchBar>
const Template:ComponentStory <typeof SearchBar> = () => <SearchBar />
export const searchBar = Template.bind({})