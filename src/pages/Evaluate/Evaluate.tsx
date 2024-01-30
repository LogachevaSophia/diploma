import React, { useEffect } from "react";
import Header from "../../components/header/Header.tsx";
import CrumblesTests from "../../components/CrumblesTests/CrumbleTests.tsx";
import CardTest from "../../components/CatdTest/CardTest.tsx";
import { useNavigate, useParams } from "react-router-dom";
import crumblesStore from "../../Store/CrumblesStore.tsx";
import {question} from "../../Store/CrumblesStore.tsx";
import styles from "./styles.module.scss";




const Evaluate = () => {
    const {idAnswer} = useParams();

    const {allQuestions,getAllQuestions, setCurrentAnswer} = crumblesStore

    useEffect(()=>{
        getAllQuestions()
        if (idAnswer)
        setCurrentAnswer(idAnswer)
    },[])

    useEffect(()=>{
        setCurrentAnswer(idAnswer)
    },[idAnswer])


    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className={styles.card}>
                <CrumblesTests />
                {!idAnswer ? <button onClick={()=> navigate("1")}>
                    Начать тест
                </button> : <CardTest />} 
            </div>
            
        </>
    )

}

export default Evaluate;