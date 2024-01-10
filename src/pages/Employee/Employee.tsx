import React, { useEffect } from "react"
import avatar from "../../icons/avatar.jpg";
import "./styles.css";
import Place from "../../icons/Place.tsx";
import Carusel from "../../components/Slider/Slider.tsx";
import achievement from "../../icons/achievement.svg";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

import { useParams } from "react-router-dom";

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


const Employee = () => {
    const { id } = useParams();

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    }
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
    const percentage = 66;

    const dataEmployee = {
        id: 1,
        name: "Lousis Saville",
        place: "Sant Peterburg",
        spot: "Young front-end",
        achivments: data,
        percentage: 66,
        avatar: avatar
    }
    const navigate = useNavigate();


    return (
        <div className="containerProfile">
            <div className="about">
                <div className="firstBlock">
                    <div>
                        <img src={dataEmployee.avatar}></img>
                    </div>
                    <div className="fio">
                        <span>
                            {dataEmployee.name}
                        </span>
                        <span>
                            {dataEmployee.spot}
                        </span>
                    </div>
                </div>
                <div className="secondBlock">
                    <div>
                        <Place />
                        <span>{dataEmployee.place}</span>
                    </div>
                    {id ?  <div>
                        <button onClick={()=>{
                            navigate(`/evaluate/${id}/1`)
                        }}>
                            <span>+</span>
                            <span>Evaluate an employee</span>
                        </button>
                    </div> : null}
                   

                </div>


            </div>
            <div className="moreInfo">
                {dataEmployee.achivments ?  <Carusel data={dataEmployee.achivments} settings={settings} />: null}
               
                <div className="percents">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    <span>
                        Оценка сотрудниками
                    </span>
                </div>

            </div>



        </div>
    )

}

export default Employee;