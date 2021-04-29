import styles from './styles.module.scss';
import { RiDashboardLine, RiUserAddLine } from 'react-icons/ri'
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function SideBar() {
  const router = useRouter();
  return(
    <aside className={styles.container}>
      <div className={styles.user}>
        <img src="assets/user.jpeg" alt="user"/>
        <h1>Marcelo Greick</h1>
        <p>Administrador</p>
      </div>
      <div className={styles.navigation}>
        <nav onClick={() => router.push("Home")}>
          <RiDashboardLine size={20}/>
          <h2>Dashboard</h2>
        </nav>

        <nav onClick={() => router.push("Register")}>
          <RiUserAddLine size={20}/>
          <h2>Criar Usuário</h2>
        </nav>
      </div>
    </aside>
  );
}
