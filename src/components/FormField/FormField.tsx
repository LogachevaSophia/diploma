import React, { MutableRefObject, useState } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  Path,
  UseFormRegister,
} from "react-hook-form";
import classnames from "classnames";
import { debounce } from "lodash";
// import EmailFormField from "./EmailFormField";
import { FormFieldWrapper } from "./FormFieldWrapper/FormFieldWrapper.tsx";

// import PasswordFormField from "./PasswordFormField.tsx";

// import { isValidHttpUrl } from "../../utils/helpers/regex.helpers";
import {
  checksPresenceName,
  deleteInputName,
} from "../utils/helpers/input.heplers.tsx";
import styles from "./FormField.module.scss";

export type FormFieldType =
  | "text"
  | "password"
  | "tel"
  | "email"
  | "time"
  | "number"
  | "geo"
  | "decimal"
  | "textarea"
  | "hidden"
  | "inn"
  | "fio"
  | "cadastral"
  | "mask"
  | "pattern";

interface IRegisterOptions {
  [key: string]:
    | number
    | string
    | boolean
    | { [key: string]: number | string }
    | ((v: any) => void);
}

export interface IFormFieldProps<T> {
  autocomplete?: string;
  autoheight?: boolean;
  className?: string;
  currentValue?: string | number;
  delay?: number;
  labelClassName?: string;
  isVisibleTooltip?: boolean;
  disabled?: boolean;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  id?: string;
  info?: string;
  isFocused?: boolean;
  isRequired?: boolean;
  label?: string | JSX.Element;
  name?: Path<T>;
  register?: UseFormRegister<T>;
  registerOptions?: IRegisterOptions;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: FormFieldType;
  allowNegative?: boolean;
  disabledValues?: string | number;
  mask?: string | (RegExp | string)[];
  maskPlaceholder?: string;
  infoPlaceholder?: string;
  isLink?: boolean;
  replacePattern?: RegExp;
  labelInfo?: string;
  ref?: MutableRefObject<HTMLInputElement>;
  decimalPlaces?: number;
}

export const FormField = <T,>({
  autoheight,
  className,
  currentValue,
  delay,
  labelClassName,
  isVisibleTooltip = true,
  disabled = false,
  error,
  id,
  isFocused,
  info,
  isRequired,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  onInput = () => ({}),
  onKeyPress,
  register,
  registerOptions = {},
  type,
  disabledValues, // значение тултипа для disabled
  mask,
  maskPlaceholder,
  isLink,
  replacePattern,
  allowNegative = false,
  autocomplete = "false",
  labelInfo = "",
  decimalPlaces = 5,
}: IFormFieldProps<T>): JSX.Element => {
  const [focus, setIsFocus] = useState(false);
  const isValue =
    ["number", "decimal"].includes(type) &&
    (typeof currentValue === "string" || typeof currentValue === "number") &&
    (currentValue || currentValue === 0)
      ? +currentValue >= 0 || +currentValue <= 0
      : currentValue;

  const registerField = register
    ? register(name, registerOptions)
    : { onChange: onChange, value: currentValue };

  const handleChange = (e) => {
    checksPresenceName(e, name);
    if (typeof registerField.onChange === "function") {
      registerField.onChange(e);
    }
  };

  const onInputFocus = (e) => {
    deleteInputName(e, autocomplete);
    setIsFocus(true);

    if (typeof onFocus === "function") {
      onFocus(e);
    }
  };

  const onInputBlur = (e) => {
    checksPresenceName(e, name);
    setIsFocus(false);

    if (typeof onBlur === "function") {
      onBlur(e);
    }
  };

  const debounceChange = debounce(handleChange, delay);

  const evtValue = disabled && disabledValues ? disabledValues : currentValue;

//   const clickHandler = (event) => {
//     if (event.ctrlKey && isLink && isValidHttpUrl(evtValue as string)) {
//       event.stopPropagation();
//       window.open(evtValue as string, "_blank");
//       return;
//     }
//   };

  const inputProps = {
    id: id,
    className: classnames(styles.input, {
      [styles.error]: error,
      [styles.active]: focus || isFocused || isValue,
    }),
    name: name,
    type: type,
    readOnly: disabled,
    tabIndex: disabled ? -1 : 0,
    autoComplete: autocomplete,
    onFocus: onInputFocus,
    onBlur: onInputBlur,
    onInput: onInput,
    onChange: delay ? debounceChange : handleChange,
    // onClick: clickHandler,

    // ["data-link"]:
    //   isLink && isValidHttpUrl(evtValue as string) && evtValue ? "link" : "",
    // title:
    //   isLink && isValidHttpUrl(evtValue as string) && evtValue
    //     ? "Перейти по ссылке(CTRL+щелчок)"
    //     : "",
  };
  return (
    <FormFieldWrapper
      error={error}
      label={label}
      labelInfo={labelInfo}
      value={evtValue}
      info={info}
      isLink={isLink}
      maskPlaceholder={maskPlaceholder}
      isMask={type === "mask"}
      required={isRequired}
      disabled={disabled}
      isFocused={focus || isFocused || !!isValue}
      isVisible={isVisibleTooltip}
      labelClassName={labelClassName}
      className={classnames(styles.textField, {
        [className]: className,
        [styles.noLabel]: !label,
        [styles.hiddenTextField]: type === "hidden",
        [styles["input-link"]]: isLink === true && !error,
      })}
    >
      {/* {type === "hidden" && (
        <input {...registerField} {...inputProps} type="hidden" />
      )} */}
      {type === "text" && <input {...registerField} {...inputProps} />}
      {/* {(type === "decimal" || type === "number") && (
        <DecimalFormField
          checksPresenceName={checksPresenceName}
          registerField={registerField}
          allowNegative={allowNegative}
          decimalPlaces={decimalPlaces}
          {...inputProps}
        />
      )} */}
      {/* {type === "fio" && (
        <FioFormField
          checksPresenceName={checksPresenceName}
          registerField={registerField}
          {...inputProps}
        />
      )} */}
      {/* {type === "cadastral" && (
        <CadastralFormField
          checksPresenceName={checksPresenceName}
          registerField={registerField}
          {...inputProps}
        />
      )} */}
      {/* {type === "time" && (
        <MaskTimeFormField
          checksPresenceName={checksPresenceName}
          registerField={registerField}
          {...inputProps}
        />
      )} */}

      {/* {type === "password" && (
        <PasswordFormField registerField={registerField} {...inputProps} />
      )} */}
      {/* {type === "tel" && (
        <PhoneFormField
          checksPresenceName={checksPresenceName}
          registerField={registerField}
          {...inputProps}
        />
      )} */}
      {/* {type === "inn" && (
        <InnFormField
          checksPresenceName={checksPresenceName}
          registerField={registerField}
          {...inputProps}
        />
      )} */}
      {/* {type === "mask" && (
        <MaskFormField
          registerField={registerField}
          {...{ ...inputProps, mask, maskPlaceholder }}
        />
      )} */}
      {/* {type === "email" && (
        <EmailFormField registerField={registerField} {...inputProps} />
      )} */}
      {/* {type === "geo" && (
        <GeoFormField registerField={registerField} {...inputProps} />
      )}
      {type === "pattern" && (
        <PatternFormField
          checksPresenceName={checksPresenceName}
          registerField={registerField}
          replacePattern={replacePattern}
          {...inputProps}
        />
      )} */}
      {/* {type === "textarea" && (
        <TextAreaFormField
          checksPresenceName={checksPresenceName}
          registerField={registerField}
          inputProps={inputProps}
          autoheight={autoheight}
        />
      )} */}
    </FormFieldWrapper>
  );
};
