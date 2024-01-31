import React from "react";
import styles from "./styles.module.scss"

import avatar from "../../icons/avatar.jpg";
import { FormField } from "../FormField/FormField.tsx"
import image from "../../icons/formloginImage.jpg"
import IButton from "../IButton/IButton.tsx";

const LoginForm = () => {

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={image}>
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
                <FormField
                    label="Пароль"
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
                <IButton
                    form="submit"
                   
                    type="button"
                // disabled={authFormsIsLoading.value}
                >
                    Войти
                </IButton>
                <div className={styles.createAccount}>
                    <hr className={styles.hr1}  />
                    <p> Не зарегистрирован? </p>
                    <hr className={styles.hr1} />
                </div>
                <IButton
                    form="submit"
                    type="submit"
                    variant="outlined" 
                    
                // disabled={authFormsIsLoading.value}
                >
                    Создать аккаунт
                </IButton>

            </form >
        </div>
    )


}

export default LoginForm;