import React from "react"
import pic from "../images/pic.jpeg"
import { MdEmail } from "react-icons/md"
import { AiOutlineLinkedin } from "react-icons/ai"
import "../styles/Info.css"

function Info() {
    return (
        <div className="info-container">
            <div className="pic-div"></div>
            <div className="info-div">
                <h1>Chaime El Oiriagli</h1>
                <p>Software Engineer</p>
                <div className="email-linkedin-div">
                    <div className="email-div">
                        <MdEmail />
                        <p> Email </p>
                    </div>
                    <div className="linkedin-div">
                        <AiOutlineLinkedin />
                        <p> LinkedIn </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info