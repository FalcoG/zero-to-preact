import { h } from 'preact';

/** fall-back route (handles unroutable URL s) */
export default ({ type, url }) => (
    <section class="error">
        <h2>Error {type}</h2>
        <p>It looks like we hit a snag.</p>
        <pre>{url}</pre>
    </section>
);