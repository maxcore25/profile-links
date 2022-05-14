import Head from 'next/head';

const MetaTitle = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default MetaTitle;
