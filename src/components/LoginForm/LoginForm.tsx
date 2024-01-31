import React from "react";
import styles from "./styles.module.scss"

import avatar from "../../icons/avatar.jpg";
import { FormField } from "../FormField/FormField.tsx"

const LoginForm = () => {

    return (
        <>
            <div className={styles.formLogin}>
                <img src={avatar}>
                </img>
            </div>
            <form className={styles.formLogin}>
                <FormField
                    label="Логин"
                    name="userName"
                    // register={register}
                    type="text"
                    // error={errorMessage(errors?.userName?.message, "userName")}
                    // isFocused={isFocused.userName}
                    // onFocus={handleFocus}
                    // onBlur={handleBlur}
                    // currentValue={watchAllField.userName}
                    autocomplete="on"
                    isRequired
                />
                {/* <span>
                    <div>
                        <input
                            name="userName"
                            className={styles.input}
                            type="text"
                            tabindex="0"
                            autocomplete="on"
                            data-link=""
                            title="" />
                    </div>
                    <div className={styles.secondBlock}>
                        <div className={styles.span}>
                            Логин
                        </div>
                    </div>
                </span> */}
            </form >
        </>
    )


}

export default LoginForm;