import React from "react"
import Facebook from "../Facebook Icon.png"
import Twitter from "../Twitter Icon.png"
import LinkedIn from "../Linkedin Icon.png"
import Instagram from "../Instagram Icon.png"
import GitHub from "../GitHub Icon.png"

export default function Footer() {
    return(
        <div className="footer">
            <div>
               <a href="www.facebook.com"><img src={Facebook} alt="Facebook Icon"></img></a>
               <a href="www.twitter.com/alaminxab"><img src={Twitter} alt="Twitter icon"/></a>
                <a href="www.linkedin.com/in/alaminxab"><img src={LinkedIn} alt="LinkedIn icon"/></a>
               <a href="www.instagram.com/wrngchxptr"><img src={Instagram} alt="Instagram icon"/></a>
                <a href="https://github.com/Excaliose777"><img src={GitHub} alt="GitHub icon"></img></a>
            </div>
        </div>
    )
}