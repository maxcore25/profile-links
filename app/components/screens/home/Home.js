const Home = () => {
  return <div>Enter</div>;
};

export async function getStaticProps(context) {
  const links = await axios.get();

  return {
    props: { links, me },
    revalidate: 60,
  };
}

export default Home;
