import React from "react"
import styles from "./IButton.module.scss";
import classnames from "classnames";

export type ButtonVariant = "outlined" | "text" | "icon";
export type ButtonSize = "large" | "medium" | "small" | "little";


export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  loading?: boolean;
}


const IButton: React.FC<IButtonProps> = ({
    className,
    isDisabled = false,
    type,
    variant,
    size,
    children = "Button",
    onClick,
    isActive = false,
    loading = false,
    ...rest
  }) => {
  const renderChild = () => {
    if (loading) {
      return (
        <div className={styles.load}>
          {/* <Spinner className={styles.spin} /> */}
          {children}
        </div>
      );
    }
    return children;
  };
return(
    <button
      className={classnames(
        styles.button,
        styles[variant],
        styles[size],
        className,
        {
          [styles.active]: isActive,
          [styles.loaded]: loading,
        },
      )}
      disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {renderChild()}
    </button>

)

}

export default IButton