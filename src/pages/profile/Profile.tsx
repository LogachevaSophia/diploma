import React from "react"
import  avatar from "../../icons/avatar.jpg";
import "./styles.css"


const Profile = () =>{

    return (
        <>
        <div className="about">
            <div>
                <div>
                    <img src={avatar}></img>
                </div>
                <div>
                    <span>
                        Lousis Saville
                    </span>
                    <br></br>
                    <span>
                        Young front-end
                    </span>
                </div>
            </div>
            

        </div>
        <div className="white">

        </div>
        </>
    )
    
}

export default Profile;