import Layout from '@/components/layout/layout';
import Notification from '@/components/ui/notification';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Notification title='test' message='hell0' status='success' />
    </Layout>
  );
}
