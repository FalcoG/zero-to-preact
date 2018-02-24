import { route } from 'preact-router';
import { h } from 'preact';

import UUIDv4 from '@lib/utils/uuid4';


function search(query) {
  route(`/profile?q=${encodeURIComponent(query)}`);
}

export default () => (
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/profile">Profile</a>
      <a href="/profile/john">John</a>
      <a href="/asdf">Error</a>
    </nav>
    <input type="search" placeholder="Search..." onSearch={e => search(e.target.value)} />
    <pre>{UUIDv4()}</pre>
  </header>
);
