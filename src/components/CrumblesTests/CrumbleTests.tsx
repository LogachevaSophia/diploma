import React, { useEffect } from "react";
import  "./styles.css"
import crumblesStore, { question } from "../../Store/CrumblesStore.tsx";
import { useNavigate, useParams } from "react-router-dom";

const CrumblesTests = ({ items, activeNumber }: { items: Array<question>, activeNumber: number }) => {
    // const {currentAnswer,setCurrentAnswer, allQuestions} = crumblesStore
    const navigate = useNavigate();
    const {idEmployee, idTest,idAnswer} = useParams();
    // формирование верхнего списка всех вопросов, при нажатии переадресация по id,в общем пишется индекс
    return (
        <div className="crumbles">
            {items.map((el, index) => {
                return (
                    <div onClick={()=>navigate(`/evaluate/${idEmployee}/${idTest}/${el.id}`) } className={`item ${activeNumber==el.id ? "active" : null}`} key={el.id}>
                        <span>
                           {index+1}
                        </span>
                    </div>
                )
            })}
           
        </div>
    )

}

export default CrumblesTests