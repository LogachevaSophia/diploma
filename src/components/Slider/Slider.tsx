import React, { useEffect } from "react";
import Slider from "react-slick";


interface SliderItem{
    id: any,
    img?: string,
    label: string
};
interface Settings{
    dots: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    infinite: true,

}



const Carusel = ( settings:Settings) => {

    return (
        <Slider {...settings}>
          <div>
            <h3>HHII</h3>
          </div>
          <div>
            <h3>HHII2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>)

}
export default Carusel;