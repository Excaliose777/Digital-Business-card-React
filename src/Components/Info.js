import React from "react"
import Image from "../my-image3.jpg"
import emailImg from "../Icon.png"
import linkedInImg from "../Vector.png"
export default function Info(){
    return(
        <div className="info">
                <img src = {Image} className="info--image" alt="Me"/>
                <h2 className = "info--name"> Abubakar Al-Amin </h2>
                <h4 className="info--title"> Blockchain Developer </h4>
            <div className="info--btns">
                <button className="info--btn--email"><img src={emailImg} alt="mail"></img>Email</button>
                <button className="info--btn--linkedIn"><img src={linkedInImg}></img>LinkedIn</button>
            </div>

        </div>
    )
}