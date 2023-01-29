import Layout from 'components/organism/Layout';
import CardTemplates from './components/CardTemplates';
import Filter from './components/Filter';

export default function BusinessCardStore() {
  return (
    <Layout>
      <Filter />
      <CardTemplates />
    </Layout>
  );
}
