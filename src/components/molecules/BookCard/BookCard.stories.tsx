import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookCard from './BookCard';
import { customTheme } from '../../../theme/CustomTheme';
import { ThemeProvider } from "emotion-theming";

export default{
    title:"Molecules/Book",
    component:BookCard
  } as ComponentMeta<typeof BookCard>

const Template: ComponentStory<typeof BookCard> = args => ( <ThemeProvider theme={customTheme}> <BookCard {...args} /> </ThemeProvider> );

export const Book = Template.bind({});

Book.args = {
    title:"Bring Your Human to Work",
    author:"Erica Keswin",
    image:"/assets/images/1.png",
    readingTime:"13-minute read",
    userCount:"1.9k reads",
    progress:55,
    status: "finished"
}
