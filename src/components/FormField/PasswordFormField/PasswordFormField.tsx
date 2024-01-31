import classnames from "classnames";
import React, { useState } from "react";


import styles from "../FormField.module.scss";

export interface IPasswordFormFieldProps {
  id?: string;
  error?: string;
  name?: string;
  type?: string;
  readOnly?: boolean;
  registerField?: any;
  isFocused?: boolean;
  isRequired?: boolean;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const PasswordFormField: React.FC<IPasswordFormFieldProps> = ({
  error,
  type,
  registerField,
  isFocused,
  ...props
}) => {
  const [isShowPw, setIsShowPw] = useState(false);
  const handlePwShow = () => setIsShowPw((prevState) => !prevState);

  const handleChangeType = (type: string) => {
    if (type === "password") {
      return isShowPw ? "text" : "password";
    } else {
      return type;
    }
  };

  return (
    <>
      <input
        {...registerField}
        className={classnames(styles.input, {
          [styles.error]: error,
          [styles.active]: isFocused,
        })}
        type={handleChangeType(type)}
        {...props}
      />

      <div className={styles.action} onClick={handlePwShow}>
        {isShowPw ? <VisibleIcon /> : <InvisibleIcon />}
      </div>
    </>
  );
};
