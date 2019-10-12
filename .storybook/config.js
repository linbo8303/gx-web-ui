import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);

configure(require.context('../src', true, /(components|layouts)\/[^/]+\/stories.js$/), module);