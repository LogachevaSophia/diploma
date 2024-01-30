import React, { useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import styles from "./Header.styles.module.scss"
import { locationsRuEng } from "./HeaderStorage.tsx";

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
 
    const currentUrl = location.pathname;
    const currentMapping = locationsRuEng[currentUrl] || 'не найдено';
    
    return(
        <div className={styles.header}>
            <span className="material-symbols-outlined" onClick={()=>{navigate(-1)}} style={{cursor:"pointer"}}>
                arrow_back
            </span>
            {currentMapping}
        </div>
    )

}

export default Header;