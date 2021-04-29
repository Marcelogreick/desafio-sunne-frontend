import { OptionHTMLAttributes, SelectHTMLAttributes, useCallback, useState ,} from 'react';
import styles from './styles.module.scss';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>  {
  option1?: string,
  option2?: string,
  option3?: string,
}

export default function Select({option1, option2, option3}: SelectProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, []);

  return(
    <select
    onFocus={() => setIsFocused(true)}
    onBlur={handleInputBlur}
    name="select"
    defaultValue={"valor1"}
    className={`
      ${styles.container}
      ${isFocused ? styles.containerFocus : ''}`
    }>
      <option value="valor1">{option1}</option>
      <option value="valor2" selected>{option2}</option>
      <option value="valor3">{option3}</option>
    </select>
  );
}
