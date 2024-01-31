import Header from "../../components/header/Header.tsx"
import styles from "./Employee.styles.module.scss"
import avatar from "../../icons/avatar.jpg";
import React from "react";
import Place from "../../icons/Place.tsx";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider.tsx";
import achievement from "../../icons/achivment-star.svg";


const EmployeeNew = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            label: "Лучший РП",
            img: achievement
        },
        {
            id: 2,
            label: "Борец за кикер",
            img: achievement
        },
        {
            id: 3,
            label: "Сдаю всё в сроки!",
            img: achievement
        },
        {
            id: 4,
            label: "Сова",
            img: achievement
        }]
    const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
    }
    
    return(
        <>
            <Header/>
            <div className={styles.employee}>
                <div className={styles.table}>
                    <img src={avatar} className={styles.tableCell}></img>
                    <div className={styles.tableCell}>
                        <div>
                            <span>Бойков Дмитрий</span>
                            <br/>
                            <span>Тестировщик</span>
                            <br/>
                            <span>live:cid: 93y2392560485</span>
                            <br/>
                        </div>
                    </div>
                </div>
                <div className={styles.place}>
                    <Place/>
                    <span>Санкт-Петербург</span>
                </div>
                <br/>
                 {id && <div className={styles.evaluate}>
                        <button onClick={()=>{
                            navigate(`/evaluate/${id}/1`)
                        }}>
                            <span>+</span>
                            <span>Evaluate an employee</span>
                        </button>
                    </div> }
            </div>
            <div className={styles.achivments}>
                <Slider settings={settings} data={data}/>
                
            </div>
        </>
    )

}

export default EmployeeNew