import React from "react"
import  avatar from "../../icons/avatar.jpg";
import "./styles.css";
import Place from "../../icons/Place.tsx";
import Carusel from "../../components/Slider/Slider.tsx";

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


const Profile = () =>{
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    }
    const data= []
    return (
        <div className="container">
            <div className="about">
                <div className="firstBlock">  
                    <div>
                        <img src={avatar}></img>
                    </div>
                    <div className="fio">
                        <span>
                            Lousis Saville
                        </span>
                        <span>
                            Young front-end
                        </span>
                    </div>
                </div>
                <div className="secondBlock">
                    <Place/>
                    <span>Sant Peterburg</span>
                </div>
                

            </div>
            <div className="moreInfo">
                <Carusel data={data} settings={settings}/>
            </div>
        </div>
    )
    
}

export default Profile;