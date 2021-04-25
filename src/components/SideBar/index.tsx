import styles from './styles.module.scss';
import { RiDashboardLine, RiUserAddLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

export default function SideBar() {
  const [ isDrawerSideBar , setIsDrawerSideBar ] = useState(true)

  return(
    <aside className={styles.container}>
      <div className={styles.user}>
        <img src="assets/user.jpeg" alt="user"/>
        <h1>Marcelo Greick</h1>
        <p>Administrador</p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <RiDashboardLine size={20}/>
          <h2>Dashboard</h2>
        </nav>

        <nav>
          <RiUserAddLine size={20}/>
          <h2>Criar Usuário</h2>
        </nav>
      </div>
    </aside>
  );
}
