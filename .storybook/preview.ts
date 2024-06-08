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
    // backgrounds: {
    //   default: '#808080',
    //   values: [
    //     { name: 'light', value: '#ffffff' },
    //     { name: 'gray', value: '#808080' },
    //     { name: 'dark', value: '#212b31' },
    //   ],
    // },
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
