import CostumCard from '../../components/CostumCard';
import SideBar from '../../components/SideBar';
import Graphic from '../../components/Graphic';
import Table from '../../components/Table';
import { parseCookies } from "../../helpers/index";

import styles from './styles.module.scss';

export default function Home() {
  return(
    <div className={styles.container}>
      <SideBar />

      <div className={styles.content}>
        <div className={styles.card}>
          <CostumCard title="Consumo" value="1.456,90 kWh" color="#ADD8E6"/>
          <CostumCard title="Valor" value="R$ 13.520,00" color="#90EE90"/>
          <CostumCard title="Economia" value="55%" color="#ffb6c1"/>
          <CostumCard title="Mês Anterior" value="R$ 6.600,00" color="#FFFDD0"/>
        </div>
        <div className={styles.informationsContainer}>
          <Table />
          <Graphic />
        </div>
      </div>
    </div>
  );
}

Home.getInitialProps = async ({ req, res }) => {
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
