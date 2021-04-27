import Button from "../../components/Button";
import Select from "../../components/Select";

import styles from "./styles.module.scss";

export default function User() {
  return(
    <div className={styles.container}>
      <section>
        <img src="/assets/iconSunne.png" alt="Sunne"/>
        <Select option1="Administrador" option2="Gerente" option3="Colaborador" />
        <Button>Avançar</Button>
      </section>
    </div>
  );
}
