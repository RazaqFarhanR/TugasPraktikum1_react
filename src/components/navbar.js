import React from "react"
import {Link} from "react-router-dom"


export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                 <div class="container-fluid">
                    <Link className="navbar-brand ms-5" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                         <li className="nav-item">
                             <Link to="/bmi" className="nav-link">
                                 BMI
                             </Link>
                         </li>
                         <li className="nav-item">
                             <Link to="/cicilan_bank" className="nav-link">
                                 BANK
                             </Link>
                         </li>
                         <li className="nav-item">
                             <Link to="/harga" className="nav-link">
                                 HARGA
                             </Link>
                         </li>
                         <li className="nav-item">
                             <Link to="/konversi" className="nav-link">
                                 KOVERSI
                             </Link>
                         </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

