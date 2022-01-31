import UserAvatar from './UserAvatar';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default{
    title: 'Atoms/Avatar',
    component: UserAvatar
} as ComponentMeta<typeof UserAvatar>

const Template : ComponentStory<typeof UserAvatar> = args => <UserAvatar {...args} />

export const Avatar = Template.bind({});

Avatar.args={
    children:'S'
}