import type { Preview } from '@storybook/react';

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/app/tailwind.css';

// Custom viewports definition. Extends the MINIMAL_VIEWPORTS
const customViewports = {
  iphone7: {
    name: 'iPhone 7',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  samsungGalaxyS21Ultra: {
    name: 'Samsung Galaxy S21 Ultra',
    styles: {
      width: '384px',
      height: '854px',
    },
  },
};
const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    backgrounds: {
      default: '#ffffff',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dim', value: '#15202b' },
        { name: 'dark', value: '#080808' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export default preview;
