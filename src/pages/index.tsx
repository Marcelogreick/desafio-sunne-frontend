import styles from '../styles/Login.module.scss';
import { FiMail, FiLock, FiEye } from 'react-icons/fi';

import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';

export default function Login() {
  const [revealPassword, setRevealPassword] = useState(false);

  function RevealPassword(event) {
    event.preventDefault()
    setRevealPassword(!revealPassword);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="assets/logo.png" alt="logo-login"/>

        <form>
          <Input
          name="password"
          icon={FiMail}
          type="email"
          placeholder="E-mail"
          />

          <Input
          name="password"
          icon={FiLock}
          type={revealPassword ? 'text' : 'password' }
          placeholder="Senha"
          iconEye={FiEye}
          showPassword={RevealPassword}
          />

          <Button type="submit">Login</Button>
        </form>
      </div>

      <div className={styles.background}></div>
    </div>
  )
}
