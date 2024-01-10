import React, { useEffect, useState } from "react";
import "./styles.css"
import crumblesStore from "../../Store/CrumblesStore.tsx";
import {question} from "../../Store/CrumblesStore.tsx";

const CardTest = () => {
    // в fillArray пишется от -н до +н для выбора ответа
    // сам компонент генерит нижню бульбашки и вопрос, данные забирает из стора 
    const fillArray = (n: number) => {
        let arr: Array<number> = [];
        for (let i = -n; i <= n; i++) {
            arr.push(i);
        }
        return arr;
    }
    const [arr, setArr] = useState<Array<number>>([]);
    
    
    const {currentIdQuestion, currentItemQuestion, currentIndexQuestion,checkAnswer} = crumblesStore

    useEffect(() => {
        
            setArr(fillArray(currentItemQuestion?.gradient)) 
        
    }, [,currentIdQuestion,currentItemQuestion, currentIndexQuestion])
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h2>
                {currentItemQuestion?.label}
            </h2>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>


                {arr.map((el) => {

                    return (
                        <div className={`answerBuble ${el==currentItemQuestion?.value ? "active" : null}`} key={el} onClick={()=>{
                            checkAnswer(currentIdQuestion,el)
                        }}> 
                            {el}
                        </div>

                    )
                })}
            </div>
        </div>

    )
}



export default CardTest;