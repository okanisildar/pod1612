import type { Meta, StoryObj } from '@storybook/react';

import { AppHeader } from './app-header';

export const Guest: StoryObj<typeof AppHeader> = {
  render: () => <AppHeader variant="guest" />,
};

export const Authenticated: StoryObj<typeof AppHeader> = {
  render: () => (
    <AppHeader
      user={{
        avatarURL: '/logo.png',
        credits: 10,
        username: 'Mr. Bee',
      }}
      variant="authenticated"
    />
  ),
};

const meta: Meta<typeof AppHeader> = {
  component: AppHeader,
};

export default meta;
