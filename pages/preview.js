// pages/preview.js
import Head from 'next/head';

export default function Preview() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Check out this post!" />
        <meta property="og:description" content="A great post on my WordPress site." />
        <meta property="og:image" content="https://yourproject.vercel.app/api/fetch-image" />
        <meta property="og:url" content="https://yourproject.vercel.app/api/redirect" />
        <title>Preview Page</title>
      </Head>
      <p>This page should redirect you to the correct site.</p>
    </>
  );
}
