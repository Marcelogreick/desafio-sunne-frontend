import { FiMail, FiLock, FiEye } from 'react-icons/fi';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import api from '../services/api';
import { useRouter } from 'next/dist/client/router';
import cookie from 'js-cookie';


import styles from '../styles/Login.module.scss';


export default function Login() {
  const router = useRouter();
  const [revealPassword, setRevealPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("login", {email, password});

      console.log(response);

      cookie.set('email', email, { expires: 1, path: '/' });

      router.push('/User');
    } catch (err) {
      console.log('error')
    }
  }

  function RevealPassword(event) {
    event.preventDefault()
    setRevealPassword(!revealPassword);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="assets/logo.png" alt="logo-login"/>

        <form onSubmit={handleLogin}>
          <Input
            name="password"
            icon={FiMail}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            name="password"
            icon={FiLock}
            type={revealPassword ? 'text' : 'password' }
            placeholder="Senha"
            iconEye={FiEye}
            showPassword={RevealPassword}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Login</Button>
        </form>
      </div>

      <div className={styles.background}></div>
    </div>
  )
}
