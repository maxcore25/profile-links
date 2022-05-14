import Home from '../app/components/screens/home/Home';
import axios from 'axios';
import { API_URL } from '../../../constants';

export default function HomePage(props) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const links = await axios.get(`${API_URL}/links`).then(({ data }) => data);
  const me = await axios.get(`${API_URL}/me`).then(({ data }) => data);

  return {
    props: { links, me },
    revalidate: 60,
  };
}
