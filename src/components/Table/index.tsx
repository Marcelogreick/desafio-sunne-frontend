import { AiOutlineEye } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';
import styles from './styles.module.scss';

export default function table() {
  return(
    <div className={styles.container}>
      <div className={styles.headerTable}>
        <p>Economia</p>
        <p>%</p>
        <p>Ação</p>
      </div>

      <ul>
        <li>
          <p>R$ 100,00</p>
          <p>20%</p>
          <div>
            <FaUserEdit size={15}/>
            <AiOutlineEye size={15} />
          </div>
        </li>

        <li>
          <p>R$ 700,00</p>
          <p>75%</p>
          <div>
            <FaUserEdit size={15}/>
            <AiOutlineEye size={15} />
          </div>
        </li>

        <li>
          <p>R$ 425,00</p>
          <p>41%</p>
          <div>
            <FaUserEdit size={15}/>
            <AiOutlineEye size={15} />
          </div>
        </li>

        <li>
          <p>R$ 900,00</p>
          <p>91%</p>
          <div>
            <FaUserEdit size={15}/>
            <AiOutlineEye size={15} />
          </div>
        </li>

        <li>
          <p>R$ 635,00</p>
          <p>61%</p>
          <div>
            <FaUserEdit size={15}/>
            <AiOutlineEye size={15} />
          </div>
        </li>

        <li>
          <p>R$ 500,00</p>
          <p>55%</p>
          <div>
            <FaUserEdit size={15}/>
            <AiOutlineEye size={15} />
          </div>
        </li>
      </ul>
    </div>
  );
}
