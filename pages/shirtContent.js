import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Shirt = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>this is the shirt post content.</p>
    </Layout>
  );
};

export default Shirt;
