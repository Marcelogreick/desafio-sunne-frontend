import { InputHTMLAttributes, useState, useCallback, useRef } from 'react';
import { IconBaseProps } from 'react-icons';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  iconEye?: React.ComponentType<IconBaseProps>;
  showPassword?: React.MouseEventHandler<HTMLButtonElement>;
  styleColor?: string;
  textColor?: string;
}

const Input: React.FC<InputProps> = ({ iconEye: IconEye, icon: Icon, styleColor, textColor, showPassword, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, []);

  return(
    <div
    className={
      `${styles.container}
       ${isFocused ? styles.containerFocus : ''}
       ${isFilled ? styles.containerFilled : ''}`
    }
    style={{backgroundColor: styleColor}}
    >
      { Icon && <Icon size={20} /> }
      <input
      onFocus={() => setIsFocused(true)}
      onBlur={handleInputBlur}
      ref={inputRef}
      {...rest}
      style={{color: textColor}}
      />
      <i onClick={showPassword}>
        { IconEye && <IconEye size={19} /> }
      </i>
    </div>
    );
}

export default Input;
