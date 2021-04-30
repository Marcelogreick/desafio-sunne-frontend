import { useRouter } from 'next/dist/client/router';
import Button from '../../components/Button';
import Select from '../../components/Select';
import { parseCookies } from '../../helpers';

import styles from './styles.module.scss';

export default function SelectUser() {
  const router = useRouter();
  return(
    <div className={styles.container}>
      <section>
        <img src="/assets/iconSunne.png" alt="Sunne"/>
        <Select option1="Administrador" option2="Gerente" option3="Colaborador" />
        <Button onClick={() => router.push("Home")}>Avançar</Button>
      </section>
    </div>
  );
}

SelectUser.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req)

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" })
      res.end()
    }
  }

  return {
    data: data && data,
  }
}
