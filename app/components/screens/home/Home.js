import axios from 'axios';
import { API_URL } from '../../../constants';

const HomePage = () => {
  return <div>Enter</div>;
};

export async function getStaticProps(context) {
  const links = await axios.get(`${API_URL}/links`).then(({ data }) => data);
  const me = await axios.get(`${API_URL}/me`).then(({ data }) => data);

  return {
    props: { links, me },
    revalidate: 60,
  };
}

export default HomePage;
