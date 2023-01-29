import Layout from 'components/organism/Layout';
import Cards from './components/Cards';
import Filter from './components/Filter';

export default function BusinessCardStore() {
  return (
    <Layout>
      <Filter />
      <Cards />
    </Layout>
  );
}
