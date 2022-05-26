import React from "react"
import "../styles/Footer.css"
import { FaTwitterSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa"

function Footer() {
    return (
        <div className="div-footer">
        <footer className="footer-container">
            <FaTwitterSquare size={30}/>
            <FaInstagramSquare size={30}/>
            <FaGithubSquare size={30}/>
        </footer>
        </div>
    )
}

export default Footer