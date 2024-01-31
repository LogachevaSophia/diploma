import { Children, ReactNode, useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { Tooltip } from "antd";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
// import TitleFromTooltip from "../../ITooltip/TitleFromTooltip";
import styles from "./FormFieldWrapper.module.scss";

interface IFormFieldWrapperProps<T> {
  children?: ReactNode;
  className?: string;
  label?: string | JSX.Element;
  labelClassName?: string;
  error?: FieldError | string | Merge<FieldError, FieldErrorsImpl<any>>;
  required?: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  labelInfo?: string;
  value?: string | number;
  isLink?: boolean;
  isMask?: boolean;
  maskPlaceholder?: string;
  info?: string | JSX.Element;
  placement?: "top" | "bottom" | "left" | "right";
  isVisible?: boolean;
}

export const FormFieldWrapper = ({
  children,
  className,
  label,
  labelInfo,
  value,
  isLink,
  maskPlaceholder,
  labelClassName,
  error,
  info,
  isFocused,
  placement = "top",
  required = false,
  disabled = false,
  isMask = false,
  isVisible = true,
}: IFormFieldWrapperProps<T>): JSX.Element => {
  const refWrap = useRef<HTMLDivElement>(null);
  const refInput = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (refWrap?.current) {
      const input = Array.from(refWrap.current.childNodes).find(
        (node: any) => node?.type,
      ) as HTMLInputElement;
      if (input) {
        refInput.current = input;
      }
    }
  }, [Children.count(children)]);

  useEffect(() => {
    if (refInput?.current) {
      setIsFocus(!!refInput.current.value);
    }
  }, [refInput?.current?.value]);
  return (
    <div
      className={classnames(styles.fieldWrapper, {
        [styles.active]: isFocused || isFocus,
        [styles.error]: error,
        [styles.disabled]: disabled,
        [className]: className,
      })}
    >
      <Tooltip
        placement="top"
        title={""
        //   <TitleFromTooltip
        //     title={label}
        //     labelInfo={labelInfo}
        //     value={refInput?.current?.value || value}
        //     isLink={isLink}
        //     maskPlaceholder={maskPlaceholder}
        //     isMask={isMask}
        //   />
        }
        color={"white"}
        overlayInnerStyle={{
          color: "#5F7380",
          fontSize: "14px",
        }}
        overlayStyle={{
          opacity:
            (label || refInput?.current?.value || value) && isVisible
              ? "1"
              : "0",
          visibility:
            (label || refInput?.current?.value || value) && isVisible
              ? "visible"
              : "hidden",
        }}
      >
        <div ref={refWrap}>{children}</div>

        <div
          className={classnames(styles.label, {
            [labelClassName]: labelClassName,
          })}
        >
          <div className={styles["label__content"]}>
            {label}
            {!disabled && required && (
              <span className={styles.required}>*</span>
            )}
          </div>
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
      </Tooltip>

    </div>
  );
};
