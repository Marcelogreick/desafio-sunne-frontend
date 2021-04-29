import { AppProps } from 'next/app';
import { Provider as NextAuthProvider} from 'next-auth/client';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp
