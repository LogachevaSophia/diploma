import React, { useEffect } from "react";
import Slider from "react-slick";
import "./styles.css"


interface SliderItem {
  id: any,
  img?: string,
  label: string
};
interface Settings {
  dots: boolean,
  speed: number,
  slidesToShow: number,
  slidesToScroll: number,
  infinite: boolean,

}



const Carusel = ({ settings, data }: { settings: Settings, data: Array<SliderItem> }) => {

  return (
    <div className='content'>
      <Slider {...settings}>
        {data.map((el) => {
          return (
            <div key={el.id} className="sliderItem">
              {el.img ? <img src={el.img}></img> : null}
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h3>{el.label}</h3>
            </div>
          )
        })}
        {/* <div>
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
          </div> */}
      </Slider>
    </div>)

}
export default Carusel;