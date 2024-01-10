import React, { useEffect, useState } from "react";
import "./styles.css"

const CardTest = ({ label, gradient }: { label: string, gradient: number }) => {
    const fillArray = (n: number) => {
        let arr: Array<number> = [];
        for (let i = -n; i <= n; i++) {
            arr.push(i);
        }
        return arr;
    }
    const [arr, setArr]: Array<any> = useState([]);



    useEffect(() => {
        setArr(fillArray(gradient))
    }, [])
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h2>
                {label}
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