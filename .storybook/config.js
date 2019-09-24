import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);

const req = require.context('../src', true, /(components|layouts)\/[^/]+\/stories.js$/);

function loadComponentStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadComponentStories, module);