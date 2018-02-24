import { h, render } from 'preact';

// Make the root element global for HMR updates
let root;

// Making our app's initialization a function means it's repeatable.
function init() {
	// HMR requires that this be a require()
	const App = require('./components/app').default;

	// Render the app and apply the new root element:
	root = render(<App />, document.body, root);
}

// Initial render
init();

// Enable HMR for webpack-dev-server
if (module.hot) module.hot.accept('./components/app', init);