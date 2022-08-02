import ShuffleText from '@/components/ShuffleText';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <p>Willkommen bei Next.js!</p>
      <ShuffleText />
    </Layout>
  );
}
