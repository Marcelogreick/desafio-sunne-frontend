import SideBar from "../../components/SideBar";

import styles from './styles.module.scss';

export default function Home() {
  return(
    <div className={styles.container}>
      <div>
        <SideBar />
      </div>
    </div>
  );
}
