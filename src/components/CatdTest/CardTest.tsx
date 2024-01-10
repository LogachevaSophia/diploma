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
    const [arr, setArr] = useState<Array<any>>([]);
    const [currentAnswerItem , setCurrentAnswerItem]= useState<question>({ id: 0,
        label: '',
        gradient: 0,
        answered: false,
        value: undefined,})
    const {currentAnswer, allQuestions} = crumblesStore
    
    useEffect(()=>{

    })


    useEffect(() => {
        if (currentAnswer){
            const res = allQuestions.find((el)=>{
                return el.id==currentAnswer
            })
            console.log(currentAnswer)
            if (res){
                setCurrentAnswerItem(res)
                setArr(fillArray(res.gradient))
                console.log(res)
            }
        }
    }, [,currentAnswer])
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h2>
                {currentAnswerItem.label}
            </h2>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>


                {arr.map((el) => {

                    return (
                        <div className="answerBuble" key={el}> 
                            {el}
                        </div>

                    )
                })}
            </div>
        </div>

    )
}



export default CardTest;