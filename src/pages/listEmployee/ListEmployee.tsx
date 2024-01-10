import React from "react";
import "./styles.css";
import avatar from "../../icons/avatar.jpg"
import Header from "../../components/header/Header.tsx";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


interface Employee {
    id: any,
    name: string,
    post: string,
    score: number,
    imgSrc: any
}

const ListEmployee = () => {

    const navigate = useNavigate();
    const list: Array<Employee> = [
        {
            id: 1,
            name: "name 1",
            post: "front",
            score: 66,
            imgSrc: avatar
        },
        {
            id: 2,
            name: "name 2",
            post: "back",
            score: 50,
            imgSrc: avatar
        }
    ];
    return (
        <>
            <Header></Header>
            <div className="containerListEmployee">

                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Post
                            </th>
                            <th>
                                Score
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((el) => {
                            return (
                               
                                    <tr key = {el.id} onClick={()=>{
                                        navigate(`${el.id}`)
                                    }}>
                                        <td>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                                                <img src={el.imgSrc} ></img>
                                                {el.name}
                                            </div>

                                        </td>
                                        <td>
                                            {el.post}
                                        </td>
                                        <td>
                                            {el.score}
                                        </td>
                                    </tr>
                                
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default ListEmployee;