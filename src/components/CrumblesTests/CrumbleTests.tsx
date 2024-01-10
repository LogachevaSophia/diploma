import React, { useEffect } from "react";
import  "./styles.css"
import crumblesStore, { question } from "../../Store/CrumblesStore.tsx";
import { useNavigate, useParams } from "react-router-dom";

const CrumblesTests = () => {
    const navigate = useNavigate();
    const {idEmployee, idTest,idAnswer} = useParams();
    const {allQuestions,currentIdQuestion, currentItemQuestion, setCurrentAnswer} = crumblesStore
    useEffect(()=>{
        console.log("***")
        console.log(currentItemQuestion)
        console.log(currentItemQuestion?.answered===true)
        
        
    },[currentItemQuestion])
    // формирование верхнего списка всех вопросов, при нажатии переадресация по id
    return (
        <div className="crumbles">
            {allQuestions.map((el, index) => {
                return (
                    <div 
                        onClick={()=>{
                            navigate(`/evaluate/${idEmployee}/${idTest}/${el.id}`);
                            setCurrentAnswer(el.id)} 
                        } 
                        className={`item ${currentIdQuestion==el.id || el?.answered===true ? "active" : null}`} 
                        key={el.id}>
                        <span>
                           {el.id}
                        </span>
                    </div>
                )
            })}
           
        </div>
    )

}

export default CrumblesTests