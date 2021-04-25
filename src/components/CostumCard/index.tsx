import styles from './styles.module.scss';

interface CardProps {
  title: string;
  value: string;
  color: string;
}

export default function CostumCard({title, value, color}) {
  return(
    <div className={styles.container} style={{backgroundColor: color}}>
      <h1>{title}</h1>
      <p>{value}</p>
    </div>
  );
}
