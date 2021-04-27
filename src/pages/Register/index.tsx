import SideBar from "../../components/SideBar";
import Input from '../../components/Input';

import styles from "./styles.module.scss";
import Select from "../../components/Select";
import Checked from "../../components/Checked";

export default function Register() {
  return(
    <div className={styles.container}>
      <SideBar />

      <div className={styles.content}>
        <h1>Cadastro</h1>
        <form>
          <div>
            <Input name="create" placeholder="Name" styleColor="#fff" textColor="#666360"/>
            <Input name="create" placeholder="Apelido" styleColor="#fff" textColor="#666360"/>
            <Input name="create" placeholder="Cargo" styleColor="#fff" textColor="#666360"/>
            <Input name="create" placeholder="Observação" styleColor="#fff" textColor="#666360"/>
            <Select title="Genêro" option1="Masculino" option2="Feminino" option3="Outro"/>
            <Select title="Status" option1="Ativo" option2="Desativado"/>
          </div>

          <section>
            <Checked title="Red" color="red"/>
            <Checked title="Blue" color="blue"/>
            <Checked title="Yellow" color="yellow"/>
            <Checked title="Green" color="green"/>
          </section>

          <div className={styles.buttonContainer}>
            <button
            type="submit"
            style={{
              backgroundColor: '#115293',
              color: '#fff',
              border: 0
            }}
            >
              Cancel
            </button>
            <button
            type="submit"
            style={{
              backgroundColor: '#fff',
              borderColor: '#115293',
              color: '#115293'
            }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
