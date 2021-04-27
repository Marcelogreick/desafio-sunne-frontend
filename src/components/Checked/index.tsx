import styles from "./styles.module.scss";

interface CheckedProps {
  title: string,
  color: string,
}

export default function Checked({color, title}: CheckedProps) {
  return(
    <div className={styles.container}>
      <input type="checkbox"></input>
      <label>{title}</label>
      <div className={styles.checkColor} style={{backgroundColor: color}}></div>
    </div>
  );
}
