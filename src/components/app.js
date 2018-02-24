import { Router } from 'preact-router';
import { h, Component } from 'preact';
import Home from './pages/hello';
import Profile from './pages/profile';
import Header from './layout/header';
import Error from './pages/error';

export default class App extends Component {
	render() {
		return (
			<div class="app">
        <Header />

        <Router>
          <Home path="/" />
          <Profile path="/profile/:user?" />
          <Error type={404} default />
        </Router>
			</div>
		);
	}
}
