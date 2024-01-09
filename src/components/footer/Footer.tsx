import React from "react";

import "./styles.css";
import Profile from "../../icons/Profile.tsx";
import Home from "../../icons/Home.tsx";
import { Link } from "react-router-dom";

const Footer = () => {
    const icons = [
        {
            id: "profile",
            component:<Profile/>
        },
        {
            id: "home",
            component: <Home/>
        }
       
    ]
    return(
        <div className="footer">
            {icons.map((el)=>{
                return(
                    <a href={el.id} key={el.id}>
                        {el.component}
                    </a>
                   
                )
            })}
        </div>
    )

}

export default Footer;