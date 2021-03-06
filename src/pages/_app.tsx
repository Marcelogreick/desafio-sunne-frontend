import { AppProps } from 'next/app';
import { CookiesProvider } from "react-cookie"
import 'sweetalert2/src/sweetalert2.scss';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}

export default MyApp
