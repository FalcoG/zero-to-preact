import { h } from 'preact';

export default ({ user, ...props }) => (
  <section class="profile">
    <h2>Profile: {user || 'you'}</h2>
    <p>This is some text about {user || 'you'}.</p>
    <pre>{ JSON.stringify({ user, ...props },0,'  ') }</pre>
  </section>
);
